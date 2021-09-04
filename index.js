let audioButton = document.getElementById("audio");
let button = document.getElementById("playbtn");

var count = 0;
const playAudio = () => {
  if (count == 0) {
    count = 1;
    audioButton.play();

    button.innerHTML = "&#9616;&#9616;";
  } else {
    count = 0;
    audioButton.pause();

    button.innerHTML = "&#9658";
  }
};

// Mute function

let muteButton = document.getElementById("mute");
let mute = false;
const muteAudio = () => {
  mute = !mute;
  if (mute == true) {
    audioButton.muted = true;
    muteButton.innerHTML = "&#128263;";
  } else {
    audioButton.muted = false;
    muteButton.innerHTML = "&#128266;";
  }
};
