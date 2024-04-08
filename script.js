const openMenu = document.querySelector('.open-menu');
const smartfonMenu = document.querySelector('.smartfon-menu')
const closeMenu = document.querySelector('.close-menu');


openMenu.onclick = function() {
    smartfonMenu.style.display = 'flex';    
    closeMenu.style.display = 'block';
}
closeMenu.onclick = function() {
    this.style.display = 'none';
    smartfonMenu.style.display = 'none';    
}
