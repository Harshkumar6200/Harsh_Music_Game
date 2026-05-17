const songs = [
  {
    title: 'Cosmic Waves',
    artist: 'Luna Sol',
    file: 'music/song1.mp3',
    cover: 'images/cover1.jpg'
  },
  {
    title: 'Neon Dreams',
    artist: 'Sky Vibe',
    file: 'music/song2.mp3',
    cover: 'images/cover2.jpg'
  },
  {
    title: 'Galaxy Rush',
    artist: 'Nova Beat',
    file: 'music/song3.mp3',
    cover: 'images/cover3.jpg'
  }
];

// Document DOM Element Selectors
const audioPlayer = document.getElementById('audioPlayer');
const cover = document.getElementById('cover');
const songTitle = document.getElementById('songTitle');
const artist = document.getElementById('artist');
const bottomTitle = document.getElementById('bottomTitle');
const trackText = document.getElementById('trackText');

function playSong(index) {
    // Array safety validation
    if (index < 0 || index >= songs.length) return;

    const song = songs[index];

    // Update source audio track file
    audioPlayer.src = song.file;
    
    // Attempt play sequence (Catches native modern browser autoplay blocks safely)
    audioPlayer.play().catch(error => {
        console.log("Audio playback initiated. Awaiting user click interaction initialization context.");
    });

    // Elegant cover transitions 
    if (cover) {
        cover.style.opacity = '0';
        cover.style.transform = 'scale(0.85) rotate(-6deg)';
    }

    setTimeout(() => {
        if (cover) {
            cover.src = song.cover;
            cover.style.opacity = '1';
            cover.style.transform = 'scale(1) rotate(0deg)';
        }

        // Dynamically update UI text nodes safely if they exist
        if (artist) artist.innerText = song.artist;
        if (bottomTitle) bottomTitle.innerText = song.title;
        if (trackText) trackText.innerText = `TRACK ${index + 1} ACTIVE`;
    }, 300);
}

// Fire up first song track configuration when window asset loads are finalized
window.onload = () => {
    playSong(0);
};
