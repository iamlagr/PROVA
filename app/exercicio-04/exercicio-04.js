function calculateNetProfit(salePrice, productCost, operationalCosts) {
    if (
        typeof salePrice !== 'number' || 
        typeof productCost !== 'number' || 
        typeof operationalCosts !== 'number'
    ) {
        throw new Error("Todos os valores devem ser numéricos.");
    }

    if (salePrice < 0 || productCost < 0 || operationalCosts < 0) {
        throw new Error("Os valores não podem ser negativos.");
    }

    const netProfit = salePrice - productCost - operationalCosts;
    
    return netProfit;
}


if (typeof document !== 'undefined') {
    document.getElementById('profit-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const salePriceInput = document.getElementById('sale-price').value;
        const productCostInput = document.getElementById('product-cost').value;
        const operationalCostsInput = document.getElementById('operational-costs').value;

        const resultContainer = document.getElementById('result-container');
        const errorContainer = document.getElementById('error-container');
        const profitDisplay = document.getElementById('profit-result');
        const errorMessage = document.getElementById('error-message');

        resultContainer.className = 'hidden';
        errorContainer.classList.add('hidden');

        try {
            const salePrice = parseFloat(salePriceInput);
            const productCost = parseFloat(productCostInput);
            const operationalCosts = parseFloat(operationalCostsInput);

            const profit = calculateNetProfit(salePrice, productCost, operationalCosts);

            profitDisplay.textContent = `R$ ${profit.toFixed(2).replace('.', ',')}`;
            
            resultContainer.classList.remove('hidden');
            if (profit > 0) {
                resultContainer.classList.add('profit-positive');
            } else if (profit < 0) {
                resultContainer.classList.add('profit-negative');
            } else {
                resultContainer.classList.add('profit-neutral');
            }

        } catch (error) {
            errorMessage.textContent = error.message;
            errorContainer.classList.remove('hidden');
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateNetProfit };
}