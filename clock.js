let secondHand = document.querySelector('#second');
let minuteHand = document.querySelector('#minute');
let hourHand = document.querySelector('#hour');

function newDate() {
    let now = Date();
}

// function rotation(element, degrees) {
//     element.style.transform = `rotate(${degrees+90}deg)`
// }


let seconds = now.getSeconds();
const secondDegrees = ((seconds / 60 * 360) + 90);
secondHand.style.transform = "rotate(" + secondDegrees + "deg)";

const mins = now.getMinutes();
const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
minuteHand.style.transform = "rotate(" + minsDegrees + "deg)";

const hour = now.getHours();
const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
hourHand.style.transform = "rotate(" + hourDegrees + "deg)";

rotation(secondHand, secondDegrees);
rotation(minuteHand, minsDegrees);
rotation(hourHand, hourDegrees);

setInterval(newDate, 1000);

newDate();

