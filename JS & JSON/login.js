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
<<<<<<< HEAD
        localStorage.setItem('userRole',JSON.stringify('admin') );
=======
        localStorage.setItem('userRole', 'admin');
>>>>>>> 36098848dcdeb0fb77388bdd5eb25c16a2ccef47
        // Redirect to admin dashboard
        window.location.href = 'admin Dashboard.html';
      } else if (user.role ==='user') {
        // Redirect to user dashboard
<<<<<<< HEAD
        localStorage.setItem('userRole', JSON.stringify('user'));
        window.location.href = 'index.html';
=======
        localStorage.setItem('userRole', 'user');
        window.location.href = 'User dashboard.html';
>>>>>>> 36098848dcdeb0fb77388bdd5eb25c16a2ccef47
      }
     else {
      alert('Invalid username or password');
    }
     })
     .catch(error => console.error('Error:', error));
});
