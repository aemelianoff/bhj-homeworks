const checkbox = document.querySelectorAll('.interest__check');

function check(parentItem, chield1, chield2) {
    checkbox.item(parentItem).addEventListener('change', () => {
        if (checkbox.item(parentItem).checked) {
            checkbox.item(chield1).checked = true;
            checkbox.item(chield2).checked = true;
        }
        else if (checkbox.item(parentItem).checked === false) {
                checkbox.item(chield1).checked = false;
                checkbox.item(chield2).checked = false;
        }
    });
}

check(0, 1, 2);
check(3, 4, 5);
