document.addEventListener('alpine:init', () => {
    Alpine.store('sriLankanWildlife', {
        data: {},
        init() {
            this.loadData();
        },
        loadData() {
            fetch('JSON/sri-lankan-wildlife.json')
                .then(response => response.json())
                .then(data => {
                    this.data = data;
                    localStorage.setItem('sriLankanWildlife', JSON.stringify(data));
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        }
    });
});