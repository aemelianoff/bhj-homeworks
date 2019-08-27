const rotator = document.querySelectorAll('.rotator__case');
let count = 0;

for (let text of Array.from(rotator)) {
    function rotate() {
        if (count == rotator.length - 1) {
            rotator.item(count).classList.toggle('rotator__case_active');
            count = 0;
            rotator.item(count).classList.toggle('rotator__case_active');
        } else {
                rotator.item(count).classList.toggle('rotator__case_active');    
                count ++;
                rotator.item(count).classList.toggle('rotator__case_active');
        }
    
    }
}

setInterval(rotate, 1000);