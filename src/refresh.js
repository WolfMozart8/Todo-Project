export function deleteTodoMini () {

    const todoList = document.getElementById("todos")
    // delete todo mini list except mini input ( input is child [0] )
    while (todoList.hasChildNodes()) {
        if (todoList.childNodes[1] === undefined){break;}

    todoList.removeChild(todoList.lastChild);
    }
}