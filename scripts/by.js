const vars = {
    statusActivate: false,                                         // статус (активна/закрыта)
    modalElement: document.querySelector('.modal'),       // модалка
    buttonActivate: document.querySelector('#button123'), // кнопка активации
    buttonClose: document.querySelector('.modal__close')  // кнопка закрытия
}

window.addEventListener('DOMContentLoaded', () => {
    checkModalStatus()
})

function checkModalStatus() {
    return vars.modalElement.style.display = vars.statusActivate ? 'flex' : 'none'
}

vars.buttonActivate.onclick = eventToClick
vars.buttonClose.onclick = eventToClick

function eventToClick() {
    vars.statusActivate = !vars.statusActivate
    checkModalStatus()
}