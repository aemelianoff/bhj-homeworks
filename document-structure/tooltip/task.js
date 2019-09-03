const hasTooltip = document.querySelectorAll('.has-tooltip');

for (let tip of hasTooltip) {
    tip.addEventListener('click', (e) => {
        e.preventDefault();
        const title = e.target.getAttribute('title');
        const toolTipActive = document.querySelector('.tooltip_active');
        if (toolTipActive) {
            if (toolTipActive.textContent != title) {
                toolTipActive.remove();
                tip.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${tip.getBoundingClientRect().left}px; top: ${tip.getBoundingClientRect().top + 20}px">${title}</div>`);
                //console.log(tip.getBoundingClientRect().left);
            }
            else {
                toolTipActive.remove();}
        }
        else  {
            tip.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${tip.getBoundingClientRect().left}px; top: ${tip.getBoundingClientRect().top + 20}px">${title}</div>`);
        }
    });
    
}