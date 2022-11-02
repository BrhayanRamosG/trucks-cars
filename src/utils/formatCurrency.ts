export const formatCurrency = (value: number) => {
  return value.toLocaleString("es-MX", { style: "currency", currency: "MXN" });
};
