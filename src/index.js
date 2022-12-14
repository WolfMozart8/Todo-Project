import dom from "./dom";
import * as create from "./createTask";
import date from "./dates";


const dameTasks = {
    name: "Demo project", 
    date: date(),
    tasks: ["Make the bed", "Drink coffe", "Do notthing as usual"]
}
dom();
const hola = new create.NewToDo("projrcect 1", date());

console.log(hola);