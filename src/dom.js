const mainContent = document.querySelector(".main-content");


function addInputs () {
    const addDiv = document.createElement("DIV");
    const input = document.createElement("INPUT");
        const date = document.createElement("INPUT")

    const btn = document.createElement("BUTTON");

    addDiv.classList.add("add");
    input.classList.add("add-input");
    date.classList.add("date-input")
    btn.classList.add("add-btn");

    input.setAttribute("placeholder", "Add new task")
    date.setAttribute("type", "date");
    
    btn.textContent = "+";


    const priorList = priorityList();
    addDiv.appendChild(input);
    addDiv.appendChild(date);
    addDiv.appendChild(priorList);
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
    // const mainTask = document.createElement("DIV");
    // const text = document.createElement("P");

    // const iconsDiv = document.createElement("DIV");
    // const deleteBtn = document.createElement("BUTTON");



    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
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



export default function dom (arr) {

    mainContent.appendChild(addInputs());
    task(arr);
}


export function taskDom (taskText) {
    const taskDiv = document.createElement("DIV");
    const mainTask = document.createElement("DIV");
    const text = document.createElement("P");
    const iconsDiv = document.createElement("DIV");
    const deleteBtn = document.createElement("BUTTON");
    
    taskDiv.classList.add("task");
    mainTask.classList.add("main-task");
    iconsDiv.classList.add("icons");
    deleteBtn.classList.add("delete-task");

    text.textContent = taskText;
    deleteBtn.textContent = "x";

    mainTask.appendChild(text);
    iconsDiv.appendChild(deleteBtn);

    taskDiv.appendChild(mainTask);
    taskDiv.appendChild(iconsDiv);

    mainContent.appendChild(taskDiv);

    // Add remove behaivour
    deleteBtn.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove()
    })
}