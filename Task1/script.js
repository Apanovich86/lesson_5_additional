let formLogin = document.forms.formLogin;
const username = formLogin.username;
const submit = formLogin.submit;
submit.onclick = function (ev) {
    ev.preventDefault();
    localStorage.setItem('username', username.value);
    location.href = 'index2.html';
}
