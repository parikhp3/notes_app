const registerForm = document.getElementById('register-form')
if (registerForm) {
    registerForm.addEventListener('submit', register);
}

function User(firstName, lastName, userName, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
}

async function register(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    
    const userData = new User(firstName, lastName, userName, password);

    try {
        const res = await fetch("http://localhost:3000/user/createUser", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const result = await res.json();
        if (!result.error) {
            console.log(result);
            console.log('dasda');
            localStorage.setItem('user', JSON.stringify(result));
            window.location.href = "note.html"
        } else {
            console.log("dads");
            const err = document.querySelector('.err')
            err.innerText = result.message;
            err.style.display = 'block';
        }
        
    } catch (err) {
        console.log('errrrrr');
        console.log(err);
    }
}