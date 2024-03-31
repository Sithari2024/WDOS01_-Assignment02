function subscribe() {
    // Fetch existing subscriptions and add new one
    let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.push(this.email);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
    this.subscribed = true;
}