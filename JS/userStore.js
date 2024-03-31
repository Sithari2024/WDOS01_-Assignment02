const userStore = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    setUser(user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
    },
    logout() {
        this.user = null;
        localStorage.removeItem('user');
    }
};