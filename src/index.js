import dom from "./dom";
import { taskDom } from "./dom";
import * as Tasks from "./createTask";

dom(Tasks.tasksMain[0].tasks)

const addInput = document.querySelector(".add-input");
const btn = document.querySelector(".add-btn");
const deleteBtn = document.querySelectorAll(".delete-task");

window.addEventListener("keydown", e => {if(e.keyCode === 13){
    if (addInput.value != "") {
        taskDom(addInput.value);
        Tasks.tasksMain[0].tasks.push(addInput.value);
        addInput.value = "";
    }
    else {
        console.log("MMMMmmm ");
    }
}})

btn.addEventListener("click", () => {
    if (addInput.value != "") {
        taskDom(addInput.value);
        Tasks.tasksMain[0].tasks.push(addInput.value);
        addInput.value = "";
    }
    else {
        console.log("MMMMmmm ");
    }
})

deleteBtn.forEach(e => {
    e.addEventListener("click", (a) => {
        e.parentElement.parentElement.remove();
    })
})