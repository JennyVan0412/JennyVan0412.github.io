const myVideo = document.querySelector("#my-video");
console.log(myVideo);

//The following code allow me to play and pause a video on click of a button//

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseButton.addEventListener("click", toggleVideoPlayback);

function toggleVideoPlayback() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.pause();
  }
}

//The following code allow me to mute and unmute the video sound on click of a button//

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteButton.style.backgroundColor = "blue";
    myVideo.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "red";
    myVideo.muted = true;
  }
}

//The following code allow me to see the video's progress//

myVideo.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
  const progressBarFill = document.querySelector("#progress-bar-fill");
  console.log(progressBarFill);

  function updateProgressBar() {
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    progressBarFill.style.width = progress + "%";
    console.log(progress);
  }
}

//The following code allow me to see the video's timestamp//

const step1Button = document.querySelector("#step-1-button");
console.log(step1Button);
step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 16.0;
}

const step2Button = document.querySelector("#step-2-button");
console.log(step2Button);
step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 43.0;
}

//The following code will enable fullscreen//

myVideo.addEventListener("dbclick", goFullscreen);

const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullscreen);

function goFullscreen() {
  if (!document / fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
