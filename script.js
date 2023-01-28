const days = document.querySelectorByID("days");
const hours = document.querySelectorByID("hours");
const minutes = document.querySelectorByID("minutes");
const seconds = document.querySelectorByID("seconds");

const currentYear = new Date().getFullYear();

const birthday = new Date(`June 23 ${currentYear} 00:00:00`);

function updateCountdownTime() {
  const currentTime = new Date();
  const diff = birthday - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;

  console.log( d + "-" + h + "-" + m + "-" + s);
}

setInterval(updateCountdownTime, 1000);
 

// modal
