const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('speed__counter');

function changeSize() {
    image.width = 220;
    counter.textContent ++;
    setTimeout(() => image.width = 200, 10);
    speedCount();
}

let time = [];
console.log(time.length);
function speedCount() {
    if (image.onclick) {
        if (time.length == 0) {
            time.push(Date.now());
            speed.textContent = 1 / ( time[time.length - 1]/1000);
        }
    
    else if (time.length > 0) {
        time.push(Date.now());
        speed.textContent = 1 / (( time[time.length - 1] - time[time.length - 2])/1000);
    }}
}

image.onclick = changeSize;