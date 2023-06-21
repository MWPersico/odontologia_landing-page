//Menu hamburguer:
const hamburguer = document.getElementById('hamburguer-menu');
const menu = document.querySelector('#header-links .links-list');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    hamburguer.classList.toggle('opened');
});

// Alerta - Links:
var links = document.querySelectorAll('.link-item');
for(element of links){
    element.addEventListener('click', alertLinks)
}

function alertLinks(){
    alert('Essa demonstração é apenas da página \'home\'...\nMas posso montar um site completo para seu negócio ou ideia!')
}

// Alerta - Formulário:
const form = document.getElementById('contact-form')
form.addEventListener('submit', alertForm)
function alertForm(e){
    e.preventDefault()
    let nome = e.target[0].value ? e.target[0].value : '';
    alert(`Olá, ${nome}. Este projeto não armazena dados, mas posso fazer isso no seu site!!\nwillian.marcos7@hotmail.com\n11 99167-3136`);
}