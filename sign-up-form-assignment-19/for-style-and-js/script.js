let usersArr = [];
function UsersDetails(FirstName, LastName, email, Password) {
    this.fistName = FirstName,
        this.lastName = LastName,
        this.email = email,
        this.password = Password
}

// Form Processing 
let form = document.getElementsByClassName("form-container");
let signUpForm = document.getElementById("sign-up-form");
let logInForm = document.getElementById("log-in-form");
let pathSignUp = document.getElementById("path-sign-up").addEventListener("click", function () {
    logInForm.style.display = "none";
    signUpForm.style.display = "flex";
})

let pathLogIn = document.getElementById("path-log-in").addEventListener("click", function () {
    logInForm.style.display = "flex";
    signUpForm.style.display = "none"
})


// Sign Up / Registration docs 
function catchSignUpValues() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("re-password").value;

    let newUser = new UsersDetails(firstName, lastName, email, password, rePassword);
    usersArr.push(newUser);

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
}

signUpForm.addEventListener("submit", function (evt) {
    signUpForm.style.display = "none";
    logInForm.style.display = "flex";
    evt.preventDefault();
});

// Log In Docs 

function catchLogValues() {
    let userEmail = document.getElementById("log-in-email").value;
    let userPassword = document.getElementById("log-in-password").value;

    let orgEmail = localStorage.getItem("email");
    let orgPassword = localStorage.getItem("password");
    console.log(userEmail == orgEmail && userPassword == orgPassword);

    let popUpContainer = document.getElementById("pop-up-msg");
    if (userEmail === orgEmail && userPassword === orgPassword) {
        let logCard = `<div class = "card">
        <i class="fa-regular fa-circle-check"></i>
        <h3>You have logged in successfully </h3> 
        <button id="log-do-btn" onclick = "reloadPage()">Ok</button>
        </div>`
        popUpContainer.innerHTML = logCard;

    } else {
        let logCard = `<div class = "card">
            <i class="fa-regular fa-circle-xmark"></i>
            <h3>Invalid Email or Password</h3> 
            <button id="log-do-btn" onclick = "reloadPage()">Invalid Details</button>
            </div>`
        popUpContainer.innerHTML = logCard;
    }

    for (var i = 0; i < form.length; i++) {
        form[i].className += " filter"
    }
    popUpContainer.style.display = "flex"
}

logInForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
})

function reloadPage() {
    location.reload();
}