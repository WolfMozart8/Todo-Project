const tasksMain = [{
    name: "Example",
    tasks: ["Brush teeths", "Make the bed", "Take a walk"]
}]

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