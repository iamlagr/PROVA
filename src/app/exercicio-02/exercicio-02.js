function calculateDiscount(value) {
  // validações
  if (typeof value !== "number") {
    throw new Error("Valor deve ser numérico");
  }

  if (value < 0) {
    throw new Error("Valor não pode ser negativo");
  }

  // regras de desconto
  if (value <= 100) {
    return Number(value.toFixed(2));
  }

  if (value <= 500) {
    return Number((value * 0.9).toFixed(2));
  }

  return Number((value * 0.8).toFixed(2));
}

module.exports = { calculateDiscount };