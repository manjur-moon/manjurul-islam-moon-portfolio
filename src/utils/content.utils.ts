export const resolveContentText = (
  value: string | null | undefined,
  fallback: string,
): string => value?.trim() || fallback;
