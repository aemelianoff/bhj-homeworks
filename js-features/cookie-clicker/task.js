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

function speedCount() {
    if (image.onclick) {
        time.push(Date.now());
    if (time.length === 2) {
speed.textContent = 1 / (( time[1] - time[0])/1000);
    }
    else if (time.length > 2) {
time.splice(0, 1);
    speed.textContent = 1 / (( time[1] - time[0])/1000);
    }
    //console.log(time);
    }
}

image.onclick = changeSize;