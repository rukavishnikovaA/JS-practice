let buttonEnter = document.getElementById('enter')
let buttonInput = document.getElementById('userinput')
let ul = document.querySelector('ul')

function inputLength() {
    return userInput.value.length > 0
}

function createTodo() {
    const li = document.createElement('li')
    li.innerHTML = userInput.value;
    ul.appendChild(li)
    userInput.value = ''

    const deleteButton = document.createElement('button')
    deleteButton.appendChild(document.createTextNode('x'));
    li.appendChild(deleteButton)
    deleteButton.addEventListener('click', deleteToDoItem)

    li.addEventListener('click', function() {
        li.classList.toggle('done');
    })

    function deleteToDoItem() {
        ul.removeChild(li)
    }
}

function changeListAfterKeypress(event) {
    if (inputLength() && event.which == 13) {
        createTodo()
    }
}

function changeListAfterClick() {
    if (inputLength()) {
        createTodo()
    }
}

userInput.addEventListener('keypress', changeListAfterKeypress)
buttonEnter.addEventListener('click', changeListAfterClick)