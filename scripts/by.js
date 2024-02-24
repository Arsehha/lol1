const vars = {
    statusActivate: false,                                               // статус (активна/закрыта)
    modalElement: document.querySelector('.modal'),             // модалка
    modalMainElement: document.querySelector('.modal__main'),   // модалка карточка
    buttonActivate: document.querySelector('#button123'),       // кнопка активации
    buttonClose: document.querySelector('.modal__close')        // кнопка закрытия
}

window.addEventListener('DOMContentLoaded', () => {
    checkModalStatus()
})

function checkModalStatus() {
    return vars.modalElement.style.display = vars.statusActivate ? 'flex' : 'none'
}

vars.buttonActivate.onclick = eventToClick
vars.buttonClose.onclick = eventToClick

vars.modalElement.onclick = function (event) {
    const targetClass = event.target.className
    return targetClass === 'modal' ? eventToClick() : ''
}

function eventToClick() {
    vars.statusActivate = !vars.statusActivate
    checkModalStatus()
}