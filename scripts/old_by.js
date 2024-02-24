// Получаем кнопку с card
// способ получения элемента со страницы по id
// const buttonForm = document.getElementById('button123')

// способ получения элемента по селектору
// const buttonForm = document.querySelector('#button123')


// объект vars содержит в себе переменные, которые мы создаем (почитай про объекты)
const vars = {
    statusActivate: false,                                         // статус (активна/закрыта)
    modalElement: document.querySelector('.modal'),       // модалка
    buttonActivate: document.querySelector('#button123'), // кнопка активации
    buttonClose: document.querySelector('.modal__close')  // кнопка закрытия
}


// при загрузке страницы, проверяем статус открытия модалки
window.addEventListener('DOMContentLoaded', () => {
    checkModalStatus()
})


// Здесь мы проверяем статус открытия модалки
function checkModalStatus() {
    // if (!vars.statusActivate) {
    //     vars.modalElement.style.display = 'none'
    // } else {
    //     vars.modalElement.style.display = 'flex'
    // }

    return vars.modalElement.style.display = vars.statusActivate ? 'flex' : 'none'
}

// Почитай про function и стрелочные функции
// По клику на кнопку активации, активируем фукцию переключения статуса активации
vars.buttonActivate.onclick = eventToClick

// По клику на кнопку закрытия, активируем фукцию переключения статуса активации
vars.buttonClose.onclick = eventToClick

function eventToClick() {
    // true = false или наоборот
    vars.statusActivate = !vars.statusActivate

    // Проверка положения true или false
    checkModalStatus()
}