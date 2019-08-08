const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
function changeSize() {
image.width = 220;
counter.textContent ++;
setTimeout(() => image.width = 200, 10);
};

image.onclick = changeSize; 
