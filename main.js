const seconds = document.querySelector(".seconds");
const minuts = document.querySelector(".minuts");
const hours = document.querySelector(".hours");

function setDate() {
  // seconds.style.transform = `rotate(${sec} )`;
  const now = new Date()
  const sec = now.getSeconds();
  // console.log(sec);
  const secondsDegrees = ((sec / 60) * 360) + 90;
  // console.log(secondsDegrees);
  seconds.style.transform = `rotate(${secondsDegrees}deg)`

  const min = now.getMinutes();
  const minutsDegree = (((min / 60) * 360) + 90);
  minuts.style.transform = `rotate(${minutsDegree}deg)`;
  // console.log(min);

  const hr = now.getHours();
  const hoursDegree = ((hr / 12) * 360) + 90;
  hours.style.transform = `rotate(${hoursDegree}deg)`

}

setInterval(setDate, 1000);