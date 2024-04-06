document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  fetch('JS & JSON/users.json')
     .then(response => response.json())
     .then(data => {
       const user = data.Users.find(user => user.username === username && user.Password === password);
       if (user) {
         // Check user role
         if (user.role === 'admin') {
           // Save user role to localStorage
           localStorage.setItem('userRole', 'admin');
           // Redirect to admin dashboard
           window.location.href = 'admin Dashboard.html';
         } else {
           // Redirect to user dashboard
           window.location.href = 'User dashboard.html';
         }
       } else {
         alert('Invalid username or password');
       }
     })
     .catch(error => console.error('Error:', error));
});
