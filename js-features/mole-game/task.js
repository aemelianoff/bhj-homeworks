const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function getHole(index) {
    let hole = index;
    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent ++;
            if (dead.textContent == 10) {
                setTimeout("alert('Ура! Победа!')", 10); 
                setTimeout("dead.textContent = 0", 10);
                setTimeout("lost.textContent = 0", 10);
            }
        }
        else if (hole.className.includes('hole')) {
            lost.textContent ++;
            if (lost.textContent == 5) {
                setTimeout("alert('Эх...мазила!')", 10);
                setTimeout("dead.textContent = 0", 10);
                setTimeout("lost.textContent = 0", 10);
            }
        }

    }
}
 
let holes = document.getElementsByClassName('hole');
for (let i = 0; i < holes.length; i++) {
    getHole(holes[i]);
}