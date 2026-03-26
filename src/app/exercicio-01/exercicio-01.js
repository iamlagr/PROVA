function calculateFinalPrice(cost, profitMargin) {
  // Validação de tipo (conforme o teste 'deve lançar erro para valores não numéricos')
  if (typeof cost !== 'number' || typeof profitMargin !== 'number') {
    throw new Error("Os valores devem ser numéricos.");
  }

  if (cost < 0 || profitMargin < 0) {
    throw new Error("Os valores não podem ser negativos.");
  }

  const finalPrice = cost + (cost * (profitMargin / 100));

  return parseFloat(finalPrice.toFixed(2));
}

if (typeof module !== 'undefined') {
  module.exports = { calculateFinalPrice };
}