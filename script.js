'use strict';

var container = document.getElementsByClassName('tab');
var buttons = document.getElementsByClassName('button');
for (var x of container) {
  x.style.display = 'none';
}

function nextTab(event, id) {
  for (var x of container) {
    x.style.display = 'none';
    x.classList.remove('tabAnimation');
  }
  document.getElementById(id).style.display = 'flex';
  setTimeout(function () {
    document.getElementById(id).classList.add('tabAnimation');
  }, 50);
  for (var x of buttons) {
    x.classList.remove('selected');
  }
  event.currentTarget.classList.add('selected');
}

window.addEventListener('load', function () {
  var myAudio = document.getElementById('myAudio');

  myAudio.onplaying = function () {
    isPlaying = true;
  };
  myAudio.onpause = function () {
    isPlaying = false;
  };
});

var isPlaying = false;

function togglePlay() {
  //Paspaudus sustoja grot garsas ir pasikeicia mygtuko stilius
  if (isPlaying) {
    myAudio.pause();
    event.currentTarget.classList.remove('audio');
    event.currentTarget.classList.add('audioPause');
  } else {
    //Paspaudus groja garsas ir pasikeicia mygtuko stilius
    myAudio.play();
    event.currentTarget.classList.remove('audioPause');
    event.currentTarget.classList.add('audio');
  }
}
