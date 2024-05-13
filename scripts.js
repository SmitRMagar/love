let currentMediaIndex = 0;
const mediaList = [
  { type: 'image', source: 'img2.png' },
  { type: 'video', source: 'video.mov' },
  { type: 'image', source: 'img1.jpg' },

]

function nextMedia() {
  currentMediaIndex = (currentMediaIndex + 1) % mediaList.length;
  const media = mediaList[currentMediaIndex];
  const imageElement = document.getElementById('displayedImage');
  const videoElement = document.getElementById('displayedVideo');

  if (media.type === 'image') {
    imageElement.src = media.source;
    imageElement.style.display = 'block';
    videoElement.style.display = 'none';
  } else if (media.type === 'video') {
    videoElement.querySelector('source').src = media.source;
    videoElement.load();  // Necessary to update the video source
    videoElement.style.display = 'block';
    imageElement.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Initialize the display
  nextMedia();
});
