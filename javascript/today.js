let getName = prompt("Adınızı giriniz");
if (getName) {
  getName = `${getName[0].toUpperCase()}${getName.slice(1).toLowerCase()}`;
} else { getName = "ziyaretçi" }
let greeting = document.querySelector("#guestName");
greeting.innerHTML = getName;

let gregorianDate = document.getElementById("gregorian-date");
let hijriDate = document.getElementById("hijri-date");
let today = document.getElementById("today");
let clock = document.getElementById("clock");

gregorianDate.innerHTML = moment().locale('tr').format('DD MMMM YYYY');
hijriDate.innerHTML = writeIslamicDate();
today.innerHTML = moment().locale('tr').format('dddd');
function hour() {
  clock.innerHTML = `${moment().format('HH:mm')}:${new Date().getSeconds()}`;
}

hour();
setInterval(hour, 1000);