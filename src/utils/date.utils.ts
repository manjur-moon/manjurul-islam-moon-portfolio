import type { DateRange } from "@/types/portfolio.types";

const DATE_PATTERN = /^\d{4}(?:-\d{2})?(?:-\d{2})?$/;

export const formatPortfolioDate = (value: string | null): string | null => {
  if (value === null || !DATE_PATTERN.test(value)) return value;
  if (/^\d{4}$/.test(value)) return value;
  const normalized = value.length === 7 ? `${value}-01` : value;
  const date = new Date(`${normalized}T00:00:00.000Z`);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        timeZone: "UTC",
      }).format(date);
};

export const formatDateRange = (period: DateRange): string => {
  const start = formatPortfolioDate(period.start) ?? "Start date pending";
  const end = period.isCurrent
    ? "Present"
    : (formatPortfolioDate(period.end) ?? "End date pending");
  return `${start} — ${end}`;
};
