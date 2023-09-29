const Start = document.getElementById("Start");
const Stop = document.getElementById("Stop");
const Reset = document.getElementById("Reset");
const Continue = document.getElementById("Continue");

let timerrunning = false;
let timeinterval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let remainingSeconds = 0;

Start.addEventListener("click", StartTimer);
Stop.addEventListener("click", StopTimer);
Reset.addEventListener("click", ResetTimer);
Continue.addEventListener("click", ContinueTimer);

function StartTimer() {
  if (!timerrunning) {
    if (remainingSeconds == 0) {
      hours = parseInt(document.getElementById("hours").value);
      minutes = parseInt(document.getElementById("minutes").value);
      seconds = hours * 3600 + minutes * 60;
      // console.log(seconds);
      updatetimer();
    } else {
      seconds = remainingSeconds;
    }

    timeinterval = setInterval(() => {
      if (seconds > 0) {
        seconds--;
        updatetimer();
      } else {
        clearInterval(timeinterval);
        timerrunning = false;
      }
    }, 1000);
    timerrunning = true;
  }
}

function StopTimer() {
  clearInterval(timeinterval);
  timerrunning = false;
  remainingSeconds = seconds;
}

function ContinueTimer() {
  StartTimer();
}

function ResetTimer() {
  clearInterval(timeinterval);
  timerrunning = false;
  hours = 0;
  seconds = 0;
  minutes = 0;
  updatetimer();
}

let updatetimer = () => {
  const formattedTime = new Date(seconds * 1000).toISOString().substr(11, 8);
  // console.log(formattedTime);
  document.getElementById("timer").textContent = formattedTime;
};
