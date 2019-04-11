var songs = ["J.A. & Katomo - Take Me Down.mp3","Geoxor - Low.mp3","Who Came After - Anthem.mp3","Soltan - Face Slam.mp3",
"Moody Good - Jimmytics.mp3","Spag Heddy - Get To U.mp3","Spag Heddy & Midnight Tyrannosaurus - Operation Z.mp3"];
var song = new Audio();
var currentSong = 0;


window.onload = loadSong();

function loadSong() {
	song.src = "audio/" + songs[currentSong];
}

function PlaySong() {
	song.play();
}

function PlayOrPauseSong() {

	if(song.paused) {
		song.play();
	}

	else {
		song.pause();
	}
}

function nextSong() {
	currentSong = currentSong + 1;
	loadSong();

	song.play();

}

function pre() {
	currentSong = currentSong -1;
	loadSong();
	song.play();
}