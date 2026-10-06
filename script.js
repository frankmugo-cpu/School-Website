document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    const bookCards = document.querySelectorAll('.book-card');

    function filterBooks() {
        const query = searchInput.value.toLowerCase().trim();

        bookCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const author = card.querySelector('.author').textContent.toLowerCase();

            // Check if title or author matches the search query
            if (title.includes(query) || author.includes(query)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    // Filter as the user types
    searchInput.addEventListener('input', filterBooks);

    // Filter when the search button is clicked
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        filterBooks();
    });
});