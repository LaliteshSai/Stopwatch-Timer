const start = document.getElementById("WatchStart");
const stop = document.getElementById("WatchStop");
const reset = document.getElementById("WatchReset");
const Timer = document.getElementById("Timer");

start.addEventListener("click", WatchStartFunction);
stop.addEventListener("click", WatchStopFunction);
reset.addEventListener("click", WatchResetFunction);

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalid;
let mins = 0;
let hrs = 0;
let secs = 0;

function WatchStartFunction() {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalid = setInterval(() => {
      updateTimer();
    }, 1000);
  }
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  function pad(name) {
    return ("0" + name).length > 2 ? name : "0" + name;
  }
  hrs = pad(hrs);
  mins = pad(mins);
  secs = pad(secs);

  console.log(secs);

  let puttext = `${hrs}:${mins}:${secs}`;
  console.log(puttext);
  Timer.innerText = puttext;
}

function WatchStopFunction() {
  if (!paused) {
    clearInterval(intervalid);
    paused = true;
  }
  changeName();
}
function WatchResetFunction() {
  clearInterval(intervalid);
  paused = true;
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  mins = 0;
  hrs = 0;
  secs = 0;
  Timer.innerText = "00:00:00";
}

if ((Timer.textContent = "00:00:00")) {
  start.textContent = "Start";
} else {
  start.textContent = "Continue";
}
