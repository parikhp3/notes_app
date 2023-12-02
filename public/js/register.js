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

function register(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    
    const userData = new User(firstName, lastName, userName, password);
    console.log(userData);
}