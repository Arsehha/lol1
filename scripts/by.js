/**

    data-button="myModal" - ставиться на элемент, который будет активировать модалку при клике на него
    data-modal="myModal" - стаиться на элемент, который будет играть роль модалки
    data-active="false" - стаиться на элемент, который будет играть роль модалки, обозначает статус активации, принимаемые значение true/false
    data-modal-close="myModal" - ставиться на элемент, который будет закрывать модалку при клике на него


    Вместо myModal пишеться любое значение


        Пример

    <button type="button" data-button="myModal">Отказаться</button>

    <div data-modal="myModal" data-active="false">
        <button type="button" data-modal-close="myModal">&#10006</button>
    </div>

 */

// Все модалки со страницы
const modals = document.querySelectorAll('[data-modal]')

// Перебираем модалки
for (let i = 0; i < modals.length; i++) {
    // Проверяем каждую модалку
    changeModalVisible(modals[i], checkModelActive(modals[i].getAttribute('data-active')))
}

// Вешаем клик на окно
window.addEventListener('click', (e) => {
    const htmlElement = e.target

    // Если элемент имеет data атрибут data-button
    if (htmlElement.getAttribute('data-button')) {
        const modal = checkDataValues(htmlElement, 'data-button')

        // Если модалки нет, ничего не деалем
        if (!modal) return

        // Меняем активацию
        changeActivate(modal)
    }

    if (htmlElement.getAttribute('data-modal-close')) {
        const modal = checkDataValues(htmlElement, 'data-modal-close')

        // Если модалки нет, ничего не деалем
        if (!modal) return

        // Меняем активацию
        changeActivate(modal)
    }
})

function checkDataValues(htmlElement, dataAttr) {
    // значение data атрибута у кнопки
    const value = htmlElement.getAttribute(dataAttr)

    // Пытаемся получить модалку по value
    return document.querySelector('[data-modal="' + value + '"]')
}


// Меняем статус активации
function changeActivate(modal) {
    // Получаем значение активации модалки
    const modalActivate = checkModelActive(modal.getAttribute('data-active'))

    // Меняем значение на противоположное
    const newValueActivate = !modalActivate
    modal.setAttribute('data-active', newValueActivate)

    // Присваиваем новое значение
    changeModalVisible(modal, newValueActivate)
}

function changeModalVisible(modal, status) {
    modal.style.display = status ? 'flex' : 'none'
}

// Boolean проверка
function checkModelActive(active) {
    // Делаем нижний колонтитул
    switch (active.toLowerCase()) {
        // значение true
        case 'true':
            return true
        // значение false
        case 'false':
            return false
        // значения нет или другое
        default:
            return false
    }
}