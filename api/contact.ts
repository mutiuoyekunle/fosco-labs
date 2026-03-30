type ContactField = {
  label: string;
  value: string;
};

type ContactPayload = {
  formType: 'contact' | 'consultancy' | 'training';
  subject: string;
  replyTo: string;
  fields: ContactField[];
};

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildEmailBody(formType: ContactPayload['formType'], fields: ContactField[]) {
  const titleMap = {
    contact: 'Website contact enquiry',
    consultancy: 'Consultancy enquiry',
    training: 'Training enquiry',
  } as const;

  const rows = fields
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:600;color:#002d5b;vertical-align:top;">${escapeHtml(
            label
          )}</td>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;color:#334155;">${escapeHtml(
            value
          ).replace(/\n/g, '<br />')}</td>
        </tr>
      `
    )
    .join('');

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;line-height:1.6;">
      <h2 style="margin:0 0 16px;color:#002d5b;">${titleMap[formType]}</h2>
      <p style="margin:0 0 20px;color:#475569;">
        A new submission has been sent from the Fosco Labs website.
      </p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;">
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ error: 'Method not allowed.' });
    }

    const apiKey = process.env.PLUNK_API_KEY;
    const from = process.env.PLUNK_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error('Missing email configuration.', {
        hasApiKey: Boolean(apiKey),
        hasFrom: Boolean(from),
        hasTo: Boolean(to),
      });
      return res.status(500).json({ error: 'Email service is not configured.' });
    }

    const payload =
      typeof req.body === 'string'
        ? (JSON.parse(req.body) as ContactPayload)
        : (req.body as ContactPayload);

    if (
      !payload ||
      !payload.formType ||
      !['contact', 'consultancy', 'training'].includes(payload.formType) ||
      !payload.subject ||
      !payload.replyTo ||
      !Array.isArray(payload.fields)
    ) {
      return res.status(400).json({ error: 'Invalid submission payload.' });
    }

    if (!isEmailValid(payload.replyTo)) {
      return res.status(400).json({ error: 'Reply-to email is invalid.' });
    }

    const sanitizedFields = payload.fields
      .filter(
        (field) =>
          field &&
          typeof field.label === 'string' &&
          typeof field.value === 'string' &&
          field.label.trim() &&
          field.value.trim()
      )
      .map((field) => ({
        label: field.label.trim(),
        value: field.value.trim(),
      }));

    if (sanitizedFields.length === 0) {
      return res.status(400).json({ error: 'Submission is empty.' });
    }

    const body = buildEmailBody(payload.formType, sanitizedFields);

    const plunkPayload = {
      to: {
        email: to,
      },
      from: {
        name: 'Fosco Labs',
        email: from,
      },
      subject: payload.subject.trim(),
      body,
      replyTo: payload.replyTo,
      subscribed: false,
    };

    const response = await fetch('https://next-api.useplunk.com/v1/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plunkPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Plunk send failed.', {
        status: response.status,
        statusText: response.statusText,
        response: errorText,
        payload: {
          ...plunkPayload,
          authorization: 'redacted',
        },
      });
      return res.status(502).json({
        error: `Unable to send enquiry email. ${errorText}`,
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Unexpected contact handler error.', error);
    return res.status(500).json({ error: 'Unexpected server error.' });
  }
}
