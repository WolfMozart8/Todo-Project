const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const date = new Date();
const day = days[date.getDay()];
const month = months[date.getMonth()];
const year = date.getFullYear();

const minY = date.getFullYear().toString();
const minD = () => {
    if (date.getDate() < 10) {
        return "0" + date.getDate().toString();
    } else {
        return date.getDate().toString();
    }
}
const minM = () => {
    const newMonth = date.getMonth() + 1;

    if (newMonth < 10) {
        return "0" + newMonth.toString();
    } else {
        return newMonth.toString();
    }
}

const minDate = `${minY}-${minM()}-${minD()}`;

export default function newDay () {
    const today = `${day} ${date.getDate()}, ${month} ${year}`;
    return today;
}
export {minDate};