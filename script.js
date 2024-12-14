function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

window.onscroll = function() {
  const backToTopButton = document.getElementById('back-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

let musicPlayer = document.getElementById('music-player');
let musicButton = document.getElementById('music-button');
let musicPlaying = false;

function toggleMusic() {
  if (musicPlaying) {
    // Pause the music
    musicPlayer.pause();
    musicButton.innerHTML = '🎶'; // Change button to "Play"
  } else {
    // Play the music
    musicPlayer.play();
    musicButton.innerHTML = '⏸️'; // Change button to "Pause"
  }
  musicPlaying = !musicPlaying;
}
