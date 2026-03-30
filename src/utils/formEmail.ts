const GENERAL_ENQUIRY_EMAIL = 'hello@foscolabs.co.uk';

type EnquiryField = {
  label: string;
  value: string;
};

type EnquiryPayload = {
  formType: 'contact' | 'consultancy' | 'training';
  subject: string;
  replyTo: string;
  fields: EnquiryField[];
};

export function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function isPhoneValid(phone: string) {
  const cleaned = phone.replace(/[^\d]/g, '');
  return cleaned.length >= 7 && cleaned.length <= 15;
}

export async function submitEnquiry(payload: EnquiryPayload) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(result?.error || 'Unable to submit enquiry.');
  }

  return result;
}

export { GENERAL_ENQUIRY_EMAIL };
