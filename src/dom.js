const mainContent = document.querySelector(".main-content");
const contentDiv = document.getElementById("content");

function addInputs () {
    const addDiv = document.createElement("DIV");
    const date_prior_Div = document.createElement("DIV");
    const input = document.createElement("INPUT");
    const date = document.createElement("INPUT")
    const btn = document.createElement("BUTTON");

    addDiv.classList.add("add");
    input.classList.add("add-input");
    date.classList.add("date-input");
    date_prior_Div.classList.add("date-priority-div");
    btn.classList.add("add-btn");

    input.setAttribute("placeholder", "Add new task");
    date.setAttribute("type", "date");
    
    btn.textContent = "+";
    const priorList = priorityList();

    date_prior_Div.appendChild(date);
    date_prior_Div.appendChild(priorList);

    addDiv.appendChild(input);
    addDiv.appendChild(date_prior_Div);
    addDiv.appendChild(btn);

    return addDiv;
}

function priorityList () {
    const select = document.createElement("SELECT");
    select.classList.add("select");

    const priority = document.createElement("OPTION");
    const low = document.createElement("OPTION");
    const mid = document.createElement("OPTION");
    const high = document.createElement("OPTION");

    priority.value = "priority";
    priority.textContent = "priority";
    priority.setAttribute("selected", "");
    priority.setAttribute("disabled", "");

    low.value = "low";
    low.textContent = "low";
    mid.value = "mid";
    mid.textContent = "mid";
    high.value = "high";
    high.textContent = "high";

    select.appendChild(priority);
    select.appendChild(low);
    select.appendChild(mid);
    select.appendChild(high);

    return select;
}

function task (arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].task;
        const taskDiv = document.createElement("DIV");
        const mainTask = document.createElement("DIV");
        const text = document.createElement("P");
        const iconsDiv = document.createElement("DIV");
        const deleteBtn = document.createElement("BUTTON");
        
        taskDiv.classList.add("task");
        mainTask.classList.add("main-task");
        iconsDiv.classList.add("icons");
        deleteBtn.classList.add("delete-task");

        text.textContent = element;
        deleteBtn.textContent = "x";
    
        mainTask.appendChild(text);
        iconsDiv.appendChild(deleteBtn);
    
        taskDiv.appendChild(mainTask);
        taskDiv.appendChild(iconsDiv);

        mainContent.appendChild(taskDiv);
    
    }
}



export default function dom (projetTitle, arr) {
    const title = document.createElement("H2");
    title.textContent = projetTitle;
    mainContent.appendChild(title)
    mainContent.appendChild(addInputs());
    contentDiv.appendChild(mainContent);
    task(arr);
}


export function taskDom (taskText, date) {
    
    const dateString = date === "" ? "" : new Date(date).toDateString();

    const taskDiv = document.createElement("DIV");
    const mainTask = document.createElement("DIV");
    const text = document.createElement("P");
    const textDate = document.createElement("P");
    const iconsDiv = document.createElement("DIV");
    const deleteBtn = document.createElement("BUTTON");
    
    taskDiv.classList.add("task");
    mainTask.classList.add("main-task");
    iconsDiv.classList.add("icons");
    deleteBtn.classList.add("delete-task");

    text.textContent = taskText;

    
    textDate.textContent = dateString;
    deleteBtn.textContent = "x";

    mainTask.appendChild(text);
    mainTask.appendChild(textDate)
    iconsDiv.appendChild(deleteBtn);

    taskDiv.appendChild(mainTask);
    taskDiv.appendChild(iconsDiv);

    mainContent.appendChild(taskDiv);

    // Add remove behaivour
    deleteBtn.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove()
    })
}

export function todosMiniList () {
    const MainTodosDiv = document.createElement("DIV");
    const newTodo = document.createElement("DIV");
        const todoInput = document.createElement("INPUT");
        const todoBtn = document.createElement("BUTTON");

    todoBtn.textContent = "+";

    MainTodosDiv.setAttribute("id", "todos");
    newTodo.classList.add("new-todo");
    todoInput.classList.add("todo-input");
    todoBtn.classList.add("todo-btn");



    newTodo.appendChild(todoInput);
    newTodo.appendChild(todoBtn);
    MainTodosDiv.appendChild(newTodo);

    contentDiv.appendChild(MainTodosDiv);
}

function todoMini (title, arr) {
    const todo = document.createElement("DIV");
    const TodoList = document.createElement("UL");
    const todoTitle = document.createElement("h3");
    todoTitle.textContent = title;
    const minlenght = arr.length < 3 ? arr.length : 3;


    //class
    todo.classList.add("todo");
    todoTitle.classList.add("todo-title");
    TodoList.classList.add("todo-minilist");

    for (let i = 0; i < minlenght ; i++) {
        const taskItem = document.createElement("LI");
        taskItem.textContent = arr[i].task;
        taskItem.classList.add("task-mini");
        TodoList.appendChild(taskItem);
    }
    todo.appendChild(todoTitle);
    todo.appendChild(TodoList);

    return todo;    
}

export function addTodoMini (arr, div) {
    for (let i = 0; i < arr.length; i++) {
        div.appendChild(todoMini(arr[i].name, arr[i].tasks))
    }
}