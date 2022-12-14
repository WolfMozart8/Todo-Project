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

function task () {
    const taskDiv = document.createElement("DIV");
    const mainTask = document.createElement("DIV");
    const text = document.createElement("P");

    const iconsDiv = document.createElement("DIV");
    const deleteBtn = document.createElement("BUTTON");

    taskDiv.classList.add("task");
    mainTask.classList.add("main-task");
    iconsDiv.classList.add("icons");
    deleteBtn.classList.add("delete-task");


    text.textContent = "task here";
    deleteBtn.textContent = "x";

    mainTask.appendChild(text);
    iconsDiv.appendChild(deleteBtn);

    taskDiv.appendChild(mainTask);
    taskDiv.appendChild(iconsDiv);

    return taskDiv;
}

export default function dom () {
    mainContent.appendChild(dateTitle("november 45"));
    mainContent.appendChild(addInputs());
    mainContent.appendChild(task());
}