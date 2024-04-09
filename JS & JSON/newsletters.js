// Function to save subscription data to local storage
function saveSubscriptionToLocalStorage(name, email) {
    // Retrieve existing subscriptions from local storage
    let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    
    // Add new subscription
    subscriptions.push({ name: name, email: email });
    
    // Save updated subscriptions to local storage
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
}

// Event listener for form submission
document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="emailAddress"]').value;

    // Save subscription to local storage
    saveSubscriptionToLocalStorage(name, email);

    // Clear form fields
    document.querySelector('input[name="name"]').value = '';
    document.querySelector('input[name="emailAddress"]').value = '';

    alert('Subscription successful!'); 
});
