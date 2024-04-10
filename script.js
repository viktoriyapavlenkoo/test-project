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


// let sliderDataMap;

// getJsonData()

// async function getJsonData() {
//     fetch('slides.json')
//     .then(response => response.json())
//     .then(response => initSliderData(response));
// }

// async function initSliderData(jsonData) {
//     sliderDataMap = new Map();
//     for (let data of jsonData) {
//         sliderDataMap.set(data.id, data.imageUrl)
//     }
//     console.log('done')
//     console.log(sliderDataMap);
// }

// i()
// console.log(sliderDataMap)

// document.addEventListener('DOMContentLoaded', getJsonData)
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

console.dir(prevBtn)
fetch('slides.json')
    .then(response => response.json())
    .then(response => {
        //console.log(response)
        let id = response[0].id;
        // for(let i = 0; i < response.length; i++) {
        //     let id = response[i].id;
        //     displaySlide(id)
        // }
        displaySlide(id)
        prevBtn.onclick = function() {
            if(id > 1) {
                displaySlide(--id)
                nextBtn.removeAttribute('disabled')
            } else {
                this.setAttribute('disabled', '')
            }
        }
        nextBtn.onclick = function() {
            
            if(id < response.length) {
                displaySlide(++id)
                prevBtn.removeAttribute('disabled')
            } else {
                this.setAttribute('disabled', '')
            }
        }
       // displaySlide(response[0])
    
    
    });

function displaySlide(response) {
    console.log(response)

}