const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const date = new Date();
const day = days[date.getDay()];
const month = months[date.getMonth()];
const year = date.getFullYear();

export default function newDay () {
    const today = `${day} ${date.getDate()}, ${month} ${year}`;
    return today;
}