export const createEmailHref = (email: string): string => `mailto:${email.trim()}`;
export const createPhoneHref = (phone: string): string | null => {
  const normalized = phone.trim().replace(/[^\d+]/g, "");
  return normalized ? `tel:${normalized}` : null;
};
