const slaiders = $('.slaides');
const slaideWidth = $('.slaide').width();;
const btnNext = $('.arrow_next');
const btnBack = $('.arrow_back');

console.log()

let translate = 0;
btnNext.click(()=>{
    clearInterval(interval);
    countBtnArray.eq(count).ClassRemove('click-btn');
    count++;
    translate -= slaideWidth;
    slaiders.classList('transform', `translate(${translate}px)`);
    if (translate < slaiders.width() + slaideWidth){
        count = 0;
        translate = 0;
        slaiders.classList('transform', `translate(${translate}px)`);
    }
    countBtnArray.eq(count).ClassAdd('click-btn');
    interval = setInterval(addAutoScroll, 5000);
})

btnBack.click(() => {
    clearInterval(interval);
    countBtnArray.eq(count).ClassRemove('click-btn');
    count--;
    translate += slaideWidth;
    slaiders.classList('transform', `translate(${translate}px)`);
    if (translate >= slaideWidth){
        count = countBtnArray.length - 1;
        translate = -slaiders.offsetWidth + slaideWidth + 1;
        slaiders.classList('transform', `translate(${translate}px)`);
    }
    countBtnArray.eq(count).ClassAdd('click-btn');
    interval = setInterval(addAutoScroll, 5000);
})

// Auto Scroll
const countBtnArray = $('.buttons-slaider').children();
let interval = setInterval(addAutoScroll, 5000);
let count = 0;

function addAutoScroll(){
    countBtnArray.eq(0).classRemove('click-btn');
    // translate = 
}

