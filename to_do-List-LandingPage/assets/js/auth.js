const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        const fullname = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const response = await fetch('https://todo-backend-nluz.onrender.com/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fullname": fullname,
                "email": email,
                "password": password
            })
        });
        const data = await response.json();
        localStorage.setItem('todoToken', data.token);
        window.location.href = "newtask.html";
    } catch (error) {
        console.log(error)
        alert(error.message);
    }
});