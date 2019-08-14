const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById('modal_success');
const close = document.querySelectorAll('div.modal__close');
const success = document.querySelector('a.show-success');

function modal() {
    modalMain.className = 'modal modal_active';

    close.item(0).onclick = function() {
        modalMain.className = 'modal';
    }

    success.onclick = function () {
        modalMain.className = 'modal';
        modalSuccess.className = 'modal modal_active';
    }

    modalSuccess.onclick = function() {
        modalSuccess.className = 'modal';
    }

    close.item(1).onclick = function() {
    modalSuccess.className = 'modal';
    }
}

modal();