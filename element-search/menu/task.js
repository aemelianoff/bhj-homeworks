const menuLink = document.querySelectorAll('a.menu__link');

for (let link of Array.from(menuLink)) {
    if (link.parentElement.querySelector('.menu_sub')) {
        link.onclick = function() {
            link.parentElement.querySelector('.menu_sub').classList.toggle('menu_active');
            if (link.closest('ul')) {
                return false;
            }
        }
    }
}