const tasksMain = [];

// const tasksMain = [{
//     name: "Example",
//     tasks: ["Brush teeths", "Make the bed", "Take a walk"],
//     addTask: (task, date, priority) => {
    
//         this.tasks.push({task, date, priority});
//     },
//     delTask: (index) => {
//         this.tasks.splice(index, 1);
//     }
// }]

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
exampleList.addTask("Make the bed", "03-03-2023", "low")
exampleList.addTask("Take a walk", "03-03-2023", "low")

exampleList.delTask(1)
console.log(tasksMain)