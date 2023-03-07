

const burgerButton = document.querySelector('#burgerButton');
const menu = document.querySelector('#menu');

burgerButton.addEventListener('click',()=>{
    if(menu.classList.contains('active')) return menu.classList.remove('active')
    menu.classList.add('active')
})