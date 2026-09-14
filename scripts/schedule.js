// Import the JSON formatted data
import { sessions } from "../data/sessions.mjs";
console.log(sessions);

const destination = document.querySelector("#schedule-here");

sessions.forEach(item => {
console.log(item.start_time);
console.log(item.end_time);
console.log(item.title);
console.log(item.description);
// console.log(item.speaker.name);
// console.log(item.speaker.title);
// console.log(item.speaker.photo_url);

const row = document.createElement('tr');

//create the first column
const time = document.createElement('td');
time.innerHTML=`<p class="time">${item.start_time} - ${item.end_time}</p>`;

//create the second column
const topic = document.createElement('td');
topic.innerHTML = `<p class="title">${item.title}</p> <p>${item.description}</p>`;

//create the speaker column
const speaker = document.createElement('td');
if (item.speaker === null) {
    console.log(`no speaker`);
} else {
    speaker.innerHTML=`
    <p class="name">${item.speaker.name}</p>
    <img src="images/${item.speaker.photo_url}">
    <p class="desc">${item.speaker.title}</p>
    `
}


row.appendChild(time);
row.appendChild(topic);
row.appendChild(speaker);


destination.appendChild(row);
})
