let doc = document.createElement('div');
document.body.appendChild(doc);
let userNameGet = localStorage.getItem('username');
doc.innerHTML = userNameGet;
