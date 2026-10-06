document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const availabilityFilter = document.getElementById('availabilityFilter');
    const bookCards = document.querySelectorAll('.book-card');
    const noResultsMsg = document.getElementById('noResults');

    function filterCatalog() {
        const query = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;
        const selectedAvailability = availabilityFilter.value;
        
        let visibleCount = 0;

        bookCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const author = card.querySelector('.author').textContent.toLowerCase();
            const category = card.getAttribute('data-category');
            const status = card.getAttribute('data-status');

            // Check matches
            const matchesQuery = title.includes(query) || author.includes(query);
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
            const matchesAvailability = selectedAvailability === 'all' || status === selectedAvailability;

            if (matchesQuery && matchesCategory && matchesAvailability) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        // Toggle no results message
        if (visibleCount === 0) {
            noResultsMsg.classList.remove('hidden');
        } else {
            noResultsMsg.classList.add('hidden');
        }
    }

    // Attach event listeners to inputs
    searchInput.addEventListener('input', filterCatalog);
    categoryFilter.addEventListener('change', filterCatalog);
    availabilityFilter.addEventListener('change', filterCatalog);
});