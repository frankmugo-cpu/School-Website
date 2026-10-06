document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const successMessage = document.getElementById('successMessage');
    const sendAnotherBtn = document.getElementById('sendAnotherBtn');

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission reload

        // Simple validation check (HTML5 'required' handles most, but we can do extra checks if needed)
        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            // Hide the form and show the success confirmation banner
            feedbackForm.classList.add('hidden');
            successMessage.classList.remove('hidden');
        }
    });

    // Reset form to send another feedback message
    sendAnotherBtn.addEventListener('click', () => {
        feedbackForm.reset();
        successMessage.classList.add('hidden');
        feedbackForm.classList.remove('hidden');
    });
});