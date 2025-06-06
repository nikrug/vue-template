export function formatPrice(val: number | string) {
  const fixed =
    parseFloat(
      parseFloat(String(val))
        .toFixed(2)
        .toString()
    ).toString()
  const parts = fixed.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
}
