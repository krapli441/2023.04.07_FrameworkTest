const clock = document.querySelector("#clock");

function getTime() {
  const time = new Date();
  const years = String(time.getFullYear());
  const month = String(time.getMonth() + 1);
  const date = String(time.getDate());
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  clock.innerText = `${years}.${month}.${date}
  ${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
