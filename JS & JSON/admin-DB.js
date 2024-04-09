// Function to display subscriptions in the admin dashboard
function displaySubscriptions() {
    const newsletterList = document.getElementById('newsletter-list');
    newsletterList.innerHTML = '';
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.forEach(subscription => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${subscription.name}</td>
            <td>${subscription.email}</td>
        `;
        newsletterList.appendChild(row);
    });
}
displaySubscriptions();
