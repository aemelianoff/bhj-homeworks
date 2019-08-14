const sliderItem = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
let count = 0;

for (let sliders of Array.from(sliderItem)) {
    prev.onclick = function() {
        if (count == 0) {
            sliderItem.item(count).classList.toggle('slider__item_active');
            count = sliderItem.length - 1;
            sliderItem.item(count).classList.toggle('slider__item_active');
        } else {
            sliderItem.item(count).classList.toggle('slider__item_active');    
            count --;
            sliderItem.item(count).classList.toggle('slider__item_active');
        }
    }
    next.onclick = function() {
        if (count == sliderItem.length - 1) {
            sliderItem.item(count).classList.toggle('slider__item_active');
            count = 0;
            sliderItem.item(count).classList.toggle('slider__item_active');
        } else {
            sliderItem.item(count).classList.toggle('slider__item_active');    
            count ++;
            sliderItem.item(count).classList.toggle('slider__item_active');
        }
   
    }
}


