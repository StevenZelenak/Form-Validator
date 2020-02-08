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

const showSucces = (input, message) => {

    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}


const checkUsername = (e) => {
    e.preventDefault();
    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSucces(username)
    }
};

const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((email).toLowerCase());
}

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

const checkPassword = (e) => {
    e.preventDefault();
    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSucces(password)
    }
};

const checkPassword2 = (e) => {
    e.preventDefault();
    if (password2.value === '') {
        showError(password2, 'Password is required');
    } else {
        showSucces(password2)
    }
};

const events = () => {
    form.addEventListener('submit', checkUsername);
    form.addEventListener('submit', checkEmail);
    form.addEventListener('submit', checkPassword);
    form.addEventListener('submit', checkPassword2);
};

const init = () => {
    events();
};

init();