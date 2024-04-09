// Function to save subscription data to local storage
function saveSubscriptionToLocalStorage(name, email) {
    let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.push({ name: name, email: email });
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
}

//Form submission
document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="emailAddress"]').value;
    saveSubscriptionToLocalStorage(name, email);
    document.querySelector('input[name="name"]').value = '';
    document.querySelector('input[name="emailAddress"]').value = '';

    alert('Subscription successful!'); 
});
