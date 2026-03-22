const GENERAL_ENQUIRY_EMAIL = 'hello@foscolabs.co.uk';

export function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function isPhoneValid(phone: string) {
  const cleaned = phone.replace(/[^\d]/g, '');
  return cleaned.length >= 7 && cleaned.length <= 15;
}

export function buildMailtoHref({
  to = GENERAL_ENQUIRY_EMAIL,
  subject,
  lines,
}: {
  to?: string;
  subject: string;
  lines: Array<string | null | undefined>;
}) {
  const body = lines.filter(Boolean).join('\n');
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export function openMailto({
  to,
  subject,
  lines,
}: {
  to?: string;
  subject: string;
  lines: Array<string | null | undefined>;
}) {
  window.location.href = buildMailtoHref({ to, subject, lines });
}

export { GENERAL_ENQUIRY_EMAIL };
