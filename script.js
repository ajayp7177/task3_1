document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const cardHolderName = document.getElementById('cardHolderName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;

    // Mocked existing data
    const existingData = {
        cardHolderName: 'vvsyam',
        cardNumber: '41234234324324',
        expirationDate: '12/28',
        cvv: '456'
    };

    // Check if entered data matches existing data
    if (cardHolderName === existingData.cardHolderName &&
        cardNumber === existingData.cardNumber &&
        expirationDate === existingData.expirationDate &&
        cvv === existingData.cvv) {
        const transactionNumber = Math.floor(Math.random() * 1000000); // Generate a random transaction number
        showMessage(`Payment processed with temporary transaction number: ${transactionNumber}`, 'success');
    } else {
        showMessage('Card details not matched. Please try again.', 'error');
    }
});

function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;
}
