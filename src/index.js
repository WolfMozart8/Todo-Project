import dom from "./dom";
import { minDate } from "./dates";
import { taskDom } from "./dom";
import {tasksMain} from "./createTask";

dom(tasksMain[0].name, tasksMain[0].tasks)

const addInput = document.querySelector(".add-input");
const dateInput = document.querySelector(".date-input");
const prioInput = document.querySelector(".select");
const btn = document.querySelector(".add-btn");
const deleteBtn = document.querySelectorAll(".delete-task");

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


        // if (d === ""){
        //     t = minDate;
        // }


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

console.log(tasksMain)