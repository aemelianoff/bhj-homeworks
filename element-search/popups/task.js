const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const close = document.querySelectorAll('div.modal__close');
const success = document.querySelector('a.show-success');

function closeModal() {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal';
    modalSuccess.className = 'modal';
};

function openModal(modal) {
        modal.className = 'modal modal_active';
        modal.className = 'modal modal_active';
}

function modal() {
    openModal(modalMain)
    close.item(0).onclick = closeModal;
    success.onclick = function() {
         closeModal();
         openModal(modalSuccess);
    }
    modalSuccess.onclick = closeModal;
    close.item(1).onclick = closeModal;
}

modal();