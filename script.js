function changeSong(src, title, artist) {
    var audioPlayer = document.getElementById('audio-player');
    var songTitle = document.getElementById('song-title');
    var artistInfo = document.getElementById('artist');

    // Guardar la canción actual en una variable temporal
    var tempSong = {
        src: audioPlayer.src,
        title: songTitle.textContent,
        artist: artistInfo.textContent
    };

    // Cambiar la canción actual
    audioPlayer.src = src;
    songTitle.textContent = title;
    artistInfo.textContent = artist;

    // Actualizar la canción actual
    currentSong = {
        src: src,
        title: title,
        artist: artist
    };

    // Actualizar la canción en la lista con la canción guardada
    var playlistItems = document.querySelectorAll('.playlist-item .song-info');
    playlistItems.forEach(function(item) {
        if (item.querySelector('h2').textContent === tempSong.title && item.querySelector('p').textContent === tempSong.artist) {
            item.querySelector('h2').textContent = title;
            item.querySelector('p').textContent = artist;
        }
    });
}