const list = document.querySelector('#list')

function add() {
    const input = document.querySelector('#input')
    if (!input.value) return
    const li = document.createElement('li')
    const text = document.createTextNode(input.value)
    li.appendChild(text)
    list.appendChild(li)
    input.value = ''
}

function removeLast() {
    list.removeChild(list.lastChild)
}

function clearAll() {
    while(list.firstChild) {
        list.firstChild.remove()
    }
}

