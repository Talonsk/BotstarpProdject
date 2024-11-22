'use string';
// Попап для футера
const butn = $('.btn');
const closePopup = $('.popup-close');
const popup = $('.popup');

butn.click(function(event) {
    event.preventDefault()
    popup.css('display', 'block');
})
closePopup.click(function() {
    popup.css('display', 'none');
})

// Листание слайдера
const slaiders = document.querySelectorAll('.slaides')[0];
const slaideWidth = document.querySelector('.slaide').offsetWidth;
const btnNext = document.getElementById('arrow_next');
const btnBack = document.getElementById('arrow_back');

let translate = 0;
btnNext.onclick = () => {
    clearInterval(interval);
    countBtnArray[count].classList.remove('click-btn');
    count++;
    translate -= slaideWidth;
    slaiders.style.transform = `translate(${translate}px)`;
    if (translate < -slaiders.offsetWidth + slaideWidth){
        count = 0;
        translate = 0;
        slaiders.style.transform = `translate(${translate}px)`;
    }
    countBtnArray[count].classList.add('click-btn');
    interval = setInterval(addAutoScroll, 5000)
}
btnBack.onclick = () => {
    clearInterval(interval);
    countBtnArray[count].classList.remove('click-btn');
    count--;
    translate += slaideWidth;
    slaiders.style.transform = `translate(${translate}px)`;
    if (translate >= slaideWidth){
        count = countBtnArray.length - 1;
        translate = -slaiders.offsetWidth + slaideWidth + 1;
        slaiders.style.transform = `translate(${translate}px)`;
    }
    countBtnArray[count].classList.add('click-btn');
    interval = setInterval(addAutoScroll, 5000)
}

// Авто листание слайдера
const countBtnArray = Array.from(document.querySelectorAll('.buttons-slaider')[0].children);
let count = 0;
let interval = setInterval(addAutoScroll, 5000)
let f;
function addAutoScroll(){
    countBtnArray[count].classList.remove('click-btn');
    count++;
    translate = -slaideWidth * count;
    slaiders.style.transform = `translate(${translate}px)`;
    if (translate < -slaiders.offsetWidth + slaideWidth){
        count = 0;
        translate = 0;
        slaiders.style.transform = `translate(${translate}px)`;
    }
    countBtnArray[count].classList.add('click-btn');
}

countBtnArray.forEach(f = (countBtn, index) => {
    countBtn.onclick = () => {
        clearInterval(interval);
        countBtnArray[count].classList.remove('click-btn');
        countBtn.classList.add('click-btn');
        count = index;
        translate = -slaideWidth * count;
        slaiders.style.transform = `translate(${translate}px)`;
        interval = setInterval(addAutoScroll, 5000)
    }
})