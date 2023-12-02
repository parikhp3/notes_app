const loginForm = document.getElementById('login-form')
if (loginForm) {
    loginForm.addEventListener('submit', login);
}

function LoginData(userName, password) {
    this.userName = userName;
    this.password = password;
}

function login(e) {
    e.preventDefault();

    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    
    const loginData = new LoginData(userName, password);
    console.log(loginData);
}