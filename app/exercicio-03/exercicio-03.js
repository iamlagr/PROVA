function calculateShipping(weight, distance) {
    if (typeof weight !== 'number' || typeof distance !== 'number') {
        throw new Error("Os parâmetros devem ser valores numéricos.");
    }

    if (weight < 0 || distance < 0) {
        throw new Error("Peso e distância não podem ser valores negativos.");
    }

    const cost = (weight * 0.5) + (distance * 0.1);
    
    return cost;
}


if (typeof document !== 'undefined') {
    document.getElementById('shipping-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const weightInput = document.getElementById('weight').value;
        const distanceInput = document.getElementById('distance').value;

        const resultContainer = document.getElementById('result-container');
        const errorContainer = document.getElementById('error-container');
        const costDisplay = document.getElementById('shipping-cost');
        const errorMessage = document.getElementById('error-message');

        resultContainer.classList.add('hidden');
        errorContainer.classList.add('hidden');

        try {
            const weight = parseFloat(weightInput);
            const distance = parseFloat(distanceInput);

            const totalCost = calculateShipping(weight, distance);

            costDisplay.textContent = `R$ ${totalCost.toFixed(2).replace('.', ',')}`;
            resultContainer.classList.remove('hidden');

        } catch (error) {
        
            errorMessage.textContent = error.message;
            errorContainer.classList.remove('hidden');
        }
    });
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateShipping };
}