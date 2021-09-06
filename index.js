var audio = WaveSurfer.create({
  container: "#waveform",
  waveColor: "gray",
  progressColor: "#e83849",
  barWidth: 2,
  barHeifht: 1,
  barGap:2
});

audio.load("./Audio/audio.mp3");

let audioButton = document.getElementById("audio");
let button = document.getElementById("playbtn");

var count = 0;
// Play and Pasue funtion
const playAudio = () => {
  if (count == 0) {
    count = 1;
    audio.play();

    button.innerHTML = "&#9616;&#9616;";
  } else {
    count = 0;
    audio.pause();

    button.innerHTML = "&#9658";
  }
};

// Mute function

let muteButton = document.getElementById("mute");
let mute = false;
const muteAudio = () => {
  mute = !mute;
  if (mute == true) {
    audio.setMute(true)
    muteButton.innerHTML = "&#128263;";
  } else {
    audio.setMute(false)
    muteButton.innerHTML = "&#128266;";
  }
};
