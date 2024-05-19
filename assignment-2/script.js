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

//volume values range from 0 to 1 with an increment of 0.1
function increaseVolume() {
  if (video.volume < 0.9) {
    video.volume += 0.1;
  }
}

//since you do not want the value to go to negative the check is not at 0 but 0.11
function decreaseVolume() {
  if (video.volume > 0.11) {
    video.volume -= 0.1;
  }
}
