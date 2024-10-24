// Array para armazenar usuários
const users = [];

// Referências aos elementos do DOM
var loanForm = document.querySelector("#loanModal form");
const userList = document.getElementById('userList');

// Função para adicionar usuário
function addUser(event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const position = document.getElementById('position').value;

    if (name && email && phone && address && position) {
        users.push({ name, email, phone, address, position }); // Adiciona o usuário ao array
        displayUsers(); // Atualiza a lista de usuários
        loanForm.reset();
    }
}

// Função para exibir usuários
function displayUsers() {
    userList.innerHTML = ''; // Limpa a lista atual

    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email} - ${user.phone} - ${user.address} - ${user.position}`;
        userList.appendChild(li);
    });
}

// Adiciona o evento de submissão do formulário
loanForm.addEventListener('submit', addUser);

var loanModal = document.getElementById("loanModal");


// Obtenha os botões que abrem os modais
var loanBtn = document.getElementById("loanBtn");


// Obtenha os <span> elementos que fecham os modais
var closeLoan = document.getElementById("closeLoan");



// Obtenha os formulários



// Quando o usuário clicar no <span> (x), feche o modal
closeLoan.onclick = function() {
    loanModal.style.display = "none";
}


// Quando o usuário clicar no botão, abra o modal
loanBtn.onclick = function() {
    loanModal.style.display = "block";
}


// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
    if (event.target == loanModal) {
        loanModal.style.display = "none";
    }
}

// Quando o usuário enviar o formulário de empréstimo, mostre um alerta
loanForm.onsubmit = function(event) {
    event.preventDefault();
    alert("Empréstimo realizado com sucesso!");
    loanModal.style.display = "none";
}




