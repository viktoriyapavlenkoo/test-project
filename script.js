const openMenu = document.querySelector('.open-menu');
const smartfonMenu = document.querySelector('.smartfon-menu')
const closeMenu = document.querySelector('.close-menu');

const infoBlock = document.querySelector('.footer__info-block')
const info = document.querySelector('.info-block__list')

const contactBlock = document.querySelector('.footer__contact-block')
const address = document.querySelector('.footer__address')

openMenu.onclick = function() {
    smartfonMenu.style.display = 'flex';    
    closeMenu.style.display = 'block';
}
closeMenu.onclick = function() {
    this.style.display = 'none';
    smartfonMenu.style.display = 'none';    
}

contactBlock.onclick = function() {
    address.classList.toggle('open')
}
infoBlock.onclick = function() {
    info.classList.toggle('open')
}