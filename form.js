const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#password_check');
const mismatch = document.querySelector('.mismatch');

function check() {
    if (document.getElementById('password').value === document.getElementById('password_check').value && password.value !== '' && passwordCheck.value !== '' ) {
        password.removeAttribute('class', 'error');
        passwordCheck.removeAttribute('class', 'error');
        mismatch.style.opacity = 0;
    } else if (document.getElementById('password').value !== document.getElementById('password_check').value)  {
        password.setAttribute('class', 'error');
        passwordCheck.setAttribute('class', 'error');
        mismatch.style.opacity = 1;
    };
}

/*console.log(document.getElementById('password').value)

const btn = document.querySelector('.btnSubmit');
console.log(btn);

btn.addEventListener('click', () => {
    console.log('Hello');
    console.log(document.getElementById('password').value)
    console.log(password.value)
    console.log(passwordCheck.value)
    console.log(Number(password.value))
    console.log(password.value === '')
    console.log(password.style)
})*/