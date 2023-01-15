import dom, {taskDom, todosMiniList, addTodoMini, todoMini} from "./dom";
import { minDate } from "./dates";
import {CreateList, tasksMain} from "./createTask";


let actualIndex = 0;

todosMiniList();
dom(tasksMain[actualIndex].name, tasksMain[actualIndex].tasks)

const sideTasksList = document.getElementById("todos");
const addInput = document.querySelector(".add-input");
const dateInput = document.querySelector(".date-input");
const prioInput = document.querySelector(".select");
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const btn = document.querySelector(".add-btn");
const deleteBtn = document.querySelectorAll(".delete-task");
const mainContent = document.querySelector(".main-content");

addTodoMini(tasksMain, sideTasksList);

dateInput.setAttribute("min", minDate);

window.addEventListener("keydown", e => {if(e.keyCode === 13){
    addTaskFromInput();
}})

btn.addEventListener("click", addTaskFromInput)


function addTaskFromInput () {
    const addInput = document.querySelector(".add-input");
    const dateInput = document.querySelector(".date-input");
    const prioInput = document.querySelector(".select");
    if (addInput.value != "") {
        // t = task, d = date, p = priority
        const t = addInput.value;
        let d = dateInput.value;
        const p = prioInput.value;
        
        if (d == "") {
            d = minDate;
            console.log(d, minDate)
        }

        taskDom(addInput.value, d);

        tasksMain[actualIndex].addTask(t, d, p);
        addInput.value = "";

        const last = document.querySelector(".task:last-of-type")
        last.classList.add(`priority-${p}`);
    }
    else {
        console.log("MMMMmmm ");
        console.log(dateInput.value)
        console.log(prioInput.value)
    }
}

deleteBtn.forEach(e => {
    e.addEventListener("click", (a) => {
        e.parentElement.parentElement.remove();
    })
})

todoBtn.addEventListener("click", addTodoList)

function addTodoList () {
if (todoInput !== "") {
    const newTodo = CreateList(todoInput.value);
    tasksMain.push(newTodo);
    const lenghtMain = tasksMain.length - 1;
    sideTasksList.appendChild(todoMini(todoInput.value, tasksMain[lenghtMain].tasks))

    const todos = document.querySelectorAll(".todo");
    const selectBtn = document.querySelectorAll(".mini-btn");
    const todosArr = Array.from(selectBtn);
    

    selectBtn.forEach(btn => {
                // add class and click event once
        if (!btn.classList.contains("listener-btn")) {
        btn.addEventListener("click", () => {
            btn.classList.add("listener-btn");
            actualIndex = todosArr.indexOf(btn)

            while (mainContent.hasChildNodes()) {
                mainContent.removeChild(mainContent.firstChild);
                }

            dom(tasksMain[actualIndex].name, tasksMain[actualIndex].tasks)
            
            const lastBtn = document.querySelector(".add-btn:last-of-type");
            lastBtn.addEventListener("click", addTaskFromInput)
        })
        }
    })

    todos.forEach(todo => {
        // add class and click event once
        if (!todo.classList.contains("listener")) {
        todo.addEventListener("click", () => {
            todo.classList.add("listener");
            todo.classList.toggle("open-list");
            // actual = todosArr.indexOf(todo);
        })
        }
    })



    
    todoInput.value = "";
}
}