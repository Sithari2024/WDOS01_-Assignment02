document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  fetch('JS & JSON/users.json')
     .then(response => response.json())
     .then(data => {
       const user = data.Users.find(user => user.username === username && user.Password === password);
       if (user.role === 'admin') {
        // Save user role to localStorage
        localStorage.setItem('userRole', 'admin');
        // Redirect to admin dashboard
        window.location.href = 'admin Dashboard.html';
      } else if (user.role ==='user') {
        // Redirect to user dashboard
        localStorage.setItem('userRole', 'user');
        window.location.href = 'User dashboard.html';
      }
     else {
      alert('Invalid username or password');
    }
     })
     .catch(error => console.error('Error:', error));
});
