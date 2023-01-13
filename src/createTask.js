const tasksMain = [];

const CreateList = (name) => {
    const tasks = [];

    const addTask = (task, date, priority) => {
    
        tasks.push({task, date, priority});
    }
    const delTask = (index) => {
        tasks.splice(index, 1);
    }

    return {name, tasks, addTask, delTask};
}

export {tasksMain, CreateList};

const example1 = CreateList("Brush teeths", "03-03-2023", "low")
const example2 = CreateList("Make the bed", "03-03-2023", "low")
const example3 = CreateList("Take a walk", "03-03-2023", "low")

const exampleList = CreateList("Example List");
tasksMain.push(exampleList)
exampleList.addTask("Brush teeths", "03-03-2023", "low")
exampleList.addTask("Take a walk", "03-03-2023", "low")
exampleList.addTask("Make the bed", "03-03-2023", "low")

// const todoBtn = document.querySelector(".todo-btn");

// todoBtn.addEventListener("click", () => {
//     const todoInput = document.querySelector(".todo-input");
//     const newTodo = CreateList(todoInput.value);
//     tasksMain.push(newTodo);
//     console.log(tasksMain)
// }) 