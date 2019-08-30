const hasTooltip = document.querySelectorAll('.has-tooltip');

for (let tip of hasTooltip) {
    tip.addEventListener('click', (e) => {
        e.preventDefault();
        const title = e.target.getAttribute('title');
        if (document.querySelector('.tooltip_active')) {
            if (document.querySelector('.tooltip_active').textContent != title) {
                document.querySelector('.tooltip_active').remove();
                tip.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active">${title}</div>`);
            }
            else {
                document.querySelector('.tooltip_active').remove();}
        }
        else  {
            tip.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active">${title}</div>`);
        }
    });
}