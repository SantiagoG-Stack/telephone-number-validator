// Function to validate US phone numbers
function validatePhoneNumber(phoneNumber) {
    const validPatterns = [
        /^1?\s?\d{3}-\d{3}-\d{4}$/, // e.g., 1 555-555-5555 or 555-555-5555
        /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/, // e.g., 1 (555) 555-5555 or (555) 555-5555
        /^1?\s?\d{10}$/, // e.g., 15555555555 or 5555555555
        /^1?\s?\d{3}\s\d{3}\s\d{4}$/ // e.g., 1 555 555 5555 or 555 555 5555
    ];

    return validPatterns.some(pattern => pattern.test(phoneNumber));
}

// Event listener for the "Check" button
document.getElementById('check-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    if (validatePhoneNumber(userInput)) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
});

// Event listener for the "Clear" button
document.getElementById('clear-btn').addEventListener('click', () => {
    const resultsDiv = document.getElementById('results-div');
    resultsDiv.textContent = '';
});