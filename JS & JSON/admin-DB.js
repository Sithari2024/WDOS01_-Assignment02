// Function to display subscriptions in the admin dashboard
function displaySubscriptions() {
    const newsletterList = document.getElementById('newsletter-list');
    newsletterList.innerHTML = ''; // Clear existing data
    
    // Retrieve subscriptions from local storage
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    
    // Populate table with subscriptions
    subscriptions.forEach(subscription => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${subscription.name}</td>
            <td>${subscription.email}</td>
        `;
        newsletterList.appendChild(row);
    });
}

// Display existing subscriptions when the admin dashboard page loads
displaySubscriptions();
