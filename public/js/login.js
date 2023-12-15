const loginForm = document.getElementById('login-form')
if (loginForm) {
    loginForm.addEventListener('submit', login);
}

function LoginData(userName, password) {
    this.userName = userName;
    this.password = password;
}

async function login(e) {
    e.preventDefault();

    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    
    const loginData = new LoginData(userName, password);

    try {
        const res = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        const result = await res.json();
        if (!result.error) {
            localStorage.setItem('user', JSON.stringify(result));
            window.location.href = "note.html"
        } else {
            const err = document.querySelector('.err')
            err.innerText = result.error;
            err.style.display = 'block';
            err.style.color = 'red';
        }
        
    } catch (err) {
        console.log(err);
    }
}