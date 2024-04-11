//menu-logic

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

//form-logic

const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const elemsForm = Array.from(inputs);
elemsForm.push(textarea)

let inputPhone = document.querySelector('#phone');

elemsForm.forEach(elem => {
    const placeholderDefault = elem.nextElementSibling.dataset.placeholder;
    elem.addEventListener('change', function(event, defaultPlaceholder) {
        const placeholder = event.target.nextElementSibling;
        placeholder.dataset.placeholder = '';
        if(event.target.hasAttribute('required')) {
            placeholder.classList.toggle('empty')
        }
        if(event.target.value === "") {
            placeholder.dataset.placeholder = placeholderDefault;
        }
    })
})

inputPhone.addEventListener('keypress', event => {
    if(!/\d/.test(event.key)) {
        event.preventDefault();
    }  
});



//footer-logic

const infoBlock = document.querySelector('.footer__info-block')
const info = document.querySelector('.info-block__list')

const contactBlock = document.querySelector('.footer__contact-block')
const address = document.querySelector('.footer__address')

contactBlock.onclick = function() {
    address.classList.toggle('open')
}
infoBlock.onclick = function() {
    info.classList.toggle('open')
}


//slider-logic

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn')
const sliderImgBlock = document.querySelector('.slider-img-block');
const currentSlide = document.querySelector('.slides__current');
const allSlides = document.querySelector('.slides__all');

let images = new Map();

fetch('slides.json')
    .then(response => response.json())
    .then(response => preloadImages(response))
    .then(() => {
        let id = 1;

        displaySlide(id);
        initAllSlides()
        prevBtn.onclick = function() {
            if(id > 1) {
                displaySlide(--id)
                initPageSlides(id)
                nextBtn.removeAttribute('disabled')
            } 
            if(id == 1) {
                this.setAttribute('disabled', '')
            }
        }
        nextBtn.onclick = function() {
            if(id < images.size) {
                displaySlide(++id)
                initPageSlides(id)
                prevBtn.removeAttribute('disabled')
            } 
            if(id == images.size) {
                this.setAttribute('disabled', '')
            }
        }
    });

function preloadImages(data) {
    for(let i = 0; i < data.length; i++) {
        let image = document.createElement('img');
        image.setAttribute('src', data[i].imageUrl);
        image.setAttribute('alt', data[i].alt);
        images.set(data[i].id, image);
    }
    return data;
}

function displaySlide(id) {
    sliderImgBlock.innerHTML = '';
    sliderImgBlock.append(images.get(id));
}


function initPageSlides(id) { 
    if(id < 10) {
        currentSlide.textContent = '0' + id;
    } else {
        currentSlide.textContent = id;
    }
}

function initAllSlides() { 
    let countSlides = images.size;
    if(images.size < 10) {
        allSlides.textContent = '0' + countSlides;
    } else {
        allSlides.textContent = countSlides;
    }
}