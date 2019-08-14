const menuLink = document.querySelectorAll('a.menu__link');

for (let link of Array.from(menuLink)) {
    link.onclick = function() {
        if (link.parentElement.querySelector('.menu_sub').classList) {
            link.parentElement.querySelector('.menu_sub').classList.toggle('menu_active');
            if (link.closest('ul.menu_main')) {
                return false;
            }
        }
    }
}              