const songs = [
  {
    title: "Cosmic Waves",
    artist: "Luna Sol",
    file: "music/song1.mp3",
    cover: "images/cover1.jpg"
  },
  {
    title: "Neon Dreams",
    artist: "Sky Vibe",
    file: "music/song2.mp3",
    cover: "images/cover2.jpg"
  },
  {
    title: "Galaxy Rush",
    artist: "Nova Beat",
    file: "music/song3.mp3",
    cover: "images/cover3.jpg"
  }
];

const audioPlayer = document.getElementById("audioPlayer");
const cover = document.getElementById("cover");
const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const bottomTitle = document.getElementById("bottomTitle");
const trackText = document.getElementById("trackText");

const buttons = document.querySelectorAll(".music-btn");

function playSong(index) {

  const song = songs[index];

  audioPlayer.src = song.file;
  audioPlayer.play();

  cover.src = song.cover;

  songTitle.innerText = song.title;
  artist.innerText = song.artist;

  bottomTitle.innerText = song.title;
  trackText.innerText = `Track ${index + 1} Active`;

  buttons.forEach(btn => btn.classList.remove("active"));

  buttons[index].classList.add("active");

  cover.style.transform = "scale(0.96)";

  setTimeout(() => {
    cover.style.transform = "scale(1)";
  }, 200);
}

window.onload = () => {
  playSong(0);
};