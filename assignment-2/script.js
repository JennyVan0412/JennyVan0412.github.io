const openTimerButton = document.querySelector("#open-timer");
const timerScreen = document.querySelector("#timerscreen");

openTimerButton.addEventListener(
  "click",

  function showHideTimer() {
    if (timerScreen.style.display === "block") {
      timerScreen.style.display = "none";
    } else {
      timerScreen.style.display = "block";
    }
  }
);

const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timercountEl = document.getElementById("timercount");

let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timercountEl.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

const video = document.querySelector("#my-video");
video.removeAttribute("controls");
const playPauseButton = document.querySelector("#play-pause-button");
const playPauseImg = document.querySelector("#play-pause-img");
playPauseButton.addEventListener("click", togglePlayPause);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "img-a2/play.png";
  } else {
    video.pause();
    playPauseImg.src = "img-a2/pause.png";
  }
}

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
muteUnmuteButton.addEventListener("click", toggleAudio);
function toggleAudio() {
  if (video.muted) {
    video.muted = false;
    muteUnmuteImg.src = "img-a2/unmute.png";
  } else {
    video.muted = true;
    muteUnmuteImg.src = "img-a2/mute.png";
  }
}

const increaseVolumeButton = document.querySelector("#increase-volume-button");
increaseVolumeButton.addEventListener("click", increaseVolume);
const decreaseVolumeButton = document.querySelector("#decrease-volume-button");
decreaseVolumeButton.addEventListener("click", decreaseVolume);

video.addEventListener("volumechange", updateVolume);

function updateVolume() {
  const volume = video.volume;
  console.log("Volume changed:", volume);
}

function increaseVolume() {
  if (video.volume < 0.9) {
    video.volume += 0.1;
  }
}

function decreaseVolume() {
  if (video.volume > 0.11) {
    video.volume -= 0.1;
  }
}

/*
const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullscreen);

function goFullscreen() {
  if (!document.isFullscreen) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}*/
