// admin.js
function loadSubscriptions() {
    this.subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
}