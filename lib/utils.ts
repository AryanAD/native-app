import dayjs from "dayjs";

export const formatCurrency = (
  value: number,
  currency: string = "USD",
): string => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `$${value.toFixed(2)}`;
  }
};

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not Provided";
  const parsedDate = dayjs(value);
  return parsedDate.isValid()
    ? parsedDate.format("YYYY/MM/DD")
    : "Not Provided";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const formatRemainingDays = (
  startDate?: string,
  endDate?: string,
): string => {
  if (!startDate || !endDate) {
    return "Not Provided";
  }

  const start = dayjs(startDate);
  const end = dayjs(endDate);

  if (!start.isValid() || !end.isValid()) {
    return "Not Provided";
  }

  const diffDays = end.diff(start, "day");
  if (diffDays <= 0) {
    return "0 days";
  }

  return `${diffDays} day${diffDays === 1 ? "" : "s"}`;
};
