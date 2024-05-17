const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

//AirportAudio.play();
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAirportAudio);
function playAirportAudio() {
  airportAudio.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
pauseButton.addEventListener ("click", pauseAirportAudio);

function pauseAirportAudio () {
    airportAudio.pause();
}

const popSound = document.querySelector("#pop-sound")

popButton.addEventListener("click",popIt);

function popIt(){
    popSound.play();
}

