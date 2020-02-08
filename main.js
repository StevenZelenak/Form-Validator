//Getting elements by Id and turning them into variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
const showError = (input, message) => {

    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

//show input succes border
const showSucces = (input, message) => {

    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}

//Checks if username is empty or full
const checkUsername = (e) => {
    e.preventDefault();
    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSucces(username)
    }
};

//checks if email is valid format
const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((email).toLowerCase());
}

//checks if there is any input in email
const checkEmail = (e) => {
    e.preventDefault();
    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!emailIsValid(email.value)) {
        showError(email, 'Email is not valid');
    } else {
        showSucces(email)
    }
};

//Checks if password is empty or not and if they are the correct length
const checkPassword = (e) => {
    e.preventDefault();
    if (password.value === '') {
        showError(password, 'Password is required');
    } else if (password.value.length < 6) {
        showError(password, 'Password should be 6 characters or more');
    } else {
        showSucces(password)
    }
};

//checks if password2 is empty or not and if they match
const checkPassword2 = (e) => {
    e.preventDefault();
    if (password2.value === '') {
        showError(password2, 'Password is required');
    } else if (password2.value !== password.value) {
        showError(password2, `Passwords don't match`);
    } else {
        showSucces(password2)
    }
};

//Where all the EvenListeners are stored
const events = () => {
    form.addEventListener('submit', checkUsername);
    form.addEventListener('submit', checkEmail);
    form.addEventListener('submit', checkPassword);
    form.addEventListener('submit', checkPassword2);
};

//function to initialize funtcions
const init = () => {
    events();
};

//initializes js code
init();