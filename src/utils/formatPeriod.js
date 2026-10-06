// Formats résumé dates in the page language, like the printed CV:
// ("2025-01", "2025-04") -> "January 2025 – April 2025" / "enero 2025 – abril 2025".
// end: null for a single month, "present" for something still ongoing.
const formatMonth = (date, language) => {
  const [year, month] = date.split("-").map(Number);
  const monthName = new Intl.DateTimeFormat(language, { month: "long", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1)),
  );
  return `${monthName} ${year}`;
};

export const formatPeriod = (start, end, language, presentLabel) => {
  const from = formatMonth(start, language);
  if (!end) return from;
  return `${from} – ${end === "present" ? presentLabel : formatMonth(end, language)}`;
};
