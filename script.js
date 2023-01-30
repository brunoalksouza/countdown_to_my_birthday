const currentYear = new Date().getFullYear();

const myBirthday = new Date(`June 23 ${currentYear} 00:00:00`);

function updateCountdownTime() {
  const currentTime = new Date();
  const diff = myBirthday - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  document.getElementById("days").innerHTML = addZero(d);
  document.getElementById("hours").innerHTML = addZero(h);
  document.getElementById("minutes").innerHTML = addZero(m);
  document.getElementById("seconds").innerHTML = addZero(s);

  console.log(
    addZero(d) + "-" + addZero(h) + "-" + addZero(m) + "-" + addZero(s)
  );
}

function addZero(i) {
  if (i < 10) {
    return "0" + i;
  } else return i;
}

setInterval(updateCountdownTime, 1000);

// modal

function openModal() {
  const modal = document.getElementById("modal-container");

  modal.style.display = "flex";

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  return console.log("deu");
}
