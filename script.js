
function changeSong(src, title, artist) {
    var audioPlayer = document.getElementById('audio-player');
    var songTitle = document.getElementById('song-title');
    var artistInfo = document.getElementById('artist');

    audioPlayer.src = src;
    songTitle.textContent = title;
    artistInfo.textContent = artist;
}
