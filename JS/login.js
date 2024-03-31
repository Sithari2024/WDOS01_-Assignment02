function login() {
    fetch('JSON/users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.Users.find(u => u.username === this.username && u.Password === this.password);
            if (user) {
                // Login successful
                localStorage.setItem('currentUser', JSON.stringify(user));
                window.location.href = 'dashboard.html';
            } else {
                // Login failed
                this.error = 'Invalid username or password';
            }
        });
}