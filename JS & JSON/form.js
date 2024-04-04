const usersData = {
    "Users": [
       {
         "username": "admin",
         "password": "admin",
         "role": "admin",
         "email": "admin@admin.com"
       },
       {
         "username": "user",
         "password": "user",
         "role": "site_user",
         "email": "user@user.com"
       }
    ]
};

function login(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = usersData.Users.find(user => user.username === username && user.password === password);

    if(user){
        console.log(`Logged in as ${user.username}`);
        window.location.href = 'dashboard.html';
    } else {
        console.log('Login failed');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if(loginForm){
        loginForm.addEventListener('submit', login);
    }
});
