import dom, {taskDom, todosMiniList, addTodoMini} from "./dom";
import { minDate } from "./dates";
import {CreateList, tasksMain} from "./createTask";

todosMiniList();
dom(tasksMain[0].name, tasksMain[0].tasks)
const sideTasksList = document.getElementById("todos");
const addInput = document.querySelector(".add-input");
const dateInput = document.querySelector(".date-input");
const prioInput = document.querySelector(".select");
const btn = document.querySelector(".add-btn");
const deleteBtn = document.querySelectorAll(".delete-task");

addTodoMini(tasksMain, sideTasksList);

dateInput.setAttribute("min", minDate);

window.addEventListener("keydown", e => {if(e.keyCode === 13){
    addTaskFromInput();
}})

btn.addEventListener("click", addTaskFromInput)


function addTaskFromInput () {
    if (addInput.value != "") {
        const t = addInput.value;
        const d = dateInput.value;
        const p = prioInput.value;
        
        taskDom(addInput.value, d);

        tasksMain[0].addTask(t, d, p);
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