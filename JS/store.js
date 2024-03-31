document.addEventListener('alpine:init', () => {
    Alpine.store('pages', {
        pages: JSON.parse(localStorage.getItem('pages')) || {},
        setPage(key, page) {
            this.pages[key] = page;
            localStorage.setItem('pages', JSON.stringify(this.pages));
        },
        clearPages() {
            this.pages = {};
            localStorage.removeItem('pages');
        },
        loadPage() {
            this.pages = JSON.parse(localStorage.getItem('pages')) || {};
        }
    });

    // Loading JSON data into the store
    fetch('JSON/index-JSON.json')
        .then(response => response.json())
        .then(page => Alpine.store('pages').setPage('home', page))
        .catch(error => console.error('Error fetching JSON:', error));
});