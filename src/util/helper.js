export function dateFormat(date) {
  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}
export function clockFormat(date) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(new Date(date));
}
export function currencyFormat(amount) {
  return new Intl.NumberFormat("en", {
    currency: "USD",
    style: "currency",
  }).format(amount);
}
export function calculateTimeDiff(date) {
  const date1 = new Date().getTime();
  const date2 = new Date(date).getTime();
  return Math.round((date2 - date1) / (1000 * 60));
}
