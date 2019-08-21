document.querySelector('form').addEventListener('submit', addTodo)

function addTodo(event){
    event.preventDefault()
    const item = document.createElement('li')
    const input = document.querySelector('#item') //Select the item id. Query is a catch all for document.getElementById, document.getElementsByTag, and etc..
    item.innerText = input.value;

    const button = document.createElement('button')
    button.innerText = 'X'
    button.addEventListener('click', removeTodo)
    item.append(button);

    const list = document.querySelector('ul')
    list.appendChild(item)
}

function removeTodo(event){
    event.target.parentNode.remove() // The parent element = parentNode;

}

function completeToDo(event){
    console.log(event.target.getAttribute('aria-checked'))
}