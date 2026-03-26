function calculateROI(investment, revenue) {
   
    if (typeof investment !== 'number' || typeof revenue !== 'number') {
        throw new Error("Investimento e receita devem ser valores numéricos.");
    }

  
    if (investment < 0 || revenue < 0) {
        throw new Error("Os valores não podem ser negativos.");
    }


    if (investment === 0) {
        throw new Error("O investimento não pode ser zero.");
    }

    
    const roi = ((revenue - investment) / investment) * 100;
    
    
    return parseFloat(roi.toFixed(2));
}


if (typeof document !== 'undefined') {
    document.getElementById('roi-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const investmentInput = document.getElementById('investment').value;
        const revenueInput = document.getElementById('revenue').value;

        const resultContainer = document.getElementById('result-container');
        const errorContainer = document.getElementById('error-container');
        const roiDisplay = document.getElementById('roi-result');
        const errorMessage = document.getElementById('error-message');

        resultContainer.className = 'hidden';
        errorContainer.classList.add('hidden');

        try {
            const investment = parseFloat(investmentInput);
            const revenue = parseFloat(revenueInput);

            const roiResult = calculateROI(investment, revenue);

            roiDisplay.textContent = `${roiResult.toFixed(2).replace('.', ',')}%`;
            
            resultContainer.classList.remove('hidden');
            if (roiResult > 0) {
                resultContainer.classList.add('roi-positive');
            } else if (roiResult < 0) {
                resultContainer.classList.add('roi-negative');
            } else {
                resultContainer.classList.add('roi-neutral');
            }

        } catch (error) {
            errorMessage.textContent = error.message;
            errorContainer.classList.remove('hidden');
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateROI };
}