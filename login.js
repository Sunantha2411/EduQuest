// login.js
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('button[type="submit"]'); // Get the login button
    const usernameInput = document.getElementById('username'); // Get the username input field
    const mobileInput = document.getElementById('mobile'); // Get the mobile number input field

    // Handle the login form submission
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form default submission

        const username = usernameInput.value.trim(); // Get the trimmed username value
        const mobile = mobileInput.value.trim(); // Get the mobile number value

        if (username && mobile) {
            // Store the user's information in localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('mobile', mobile);
            

            // Show a welcome message
            alert("Welcome to EduQuest");
            

            // Redirect to selectquiz.html after login
            window.location.href = 'selectquiz.html'; // Ensure this path is correct
        } else {
            alert('Please enter both username and mobile number!');
        }
    });
});
