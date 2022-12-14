const mainContent = document.querySelector(".main-content");

function dateTitle (text) {
    const dateDiv = document.createElement("DIV");
    const h2 = document.createElement("H2");

    dateDiv.classList.add("date");

    h2.textContent = text;
    dateDiv.appendChild(h2);

    // const final = dateDiv.appendChild(h2);
    return dateDiv;
}

function addInputs () {
    const addDiv = document.createElement("DIV");
    const input = document.createElement("INPUT");
    const btn = document.createElement("BUTTON");

    addDiv.classList.add("add");
    input.classList.add("add-input");
    btn.classList.add("add-btn");

    input.setAttribute("placeholder", "Add new task")
    btn.textContent = "+";

    addDiv.appendChild(input);
    addDiv.appendChild(btn);

    return addDiv;
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



export default function dom (date, arr) {
    mainContent.appendChild(dateTitle(date));
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