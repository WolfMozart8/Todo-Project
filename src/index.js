import dom from "./dom";
import { taskDom } from "./dom";
import * as create from "./createTask";
import date from "./dates";


const dameTasks = {
    name: "Demo project", 
    date: date(),
    tasks: ["Make the bed", "Drink coffe", "Do notthing as usual"]
}
dom(date(), dameTasks.tasks);
const hola = new create.NewToDo("projrcect 1", date());

const addInput = document.querySelector(".add-input");
const btn = document.querySelector(".add-btn");
const deleteBtn = document.querySelectorAll(".delete-task");

btn.addEventListener("click", () => {
    if (addInput.value != "") {
        taskDom(addInput.value);
        dameTasks.tasks.push(addInput.value);
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