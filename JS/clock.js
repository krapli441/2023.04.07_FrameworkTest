const clock = document.querySelector("#clock");

let weekend = new Array(7);
weekend[0] = "Sunday";
weekend[1] = "Monday";
weekend[2] = "Tuesday";
weekend[3] = "Wednesday";
weekend[4] = "Thursday";
weekend[5] = "Friday";
weekend[6] = "Saturday";

function getTime() {
  const time = new Date();
  const years = String(time.getFullYear());
  const month = String(time.getMonth() + 1);
  const date = String(time.getDate());
  const day = weekend[time.getDay()];
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  clock.innerText = `${years}.${month}.${date}
  ${hours}:${minutes}:${seconds}
  ${day}`;
}

getTime();
setInterval(getTime, 1000);
