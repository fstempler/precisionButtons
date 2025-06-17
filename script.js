const containers = document.querySelectorAll('.second-video-container');

containers.forEach(container => {
  const video = container.querySelector('.second-btn-video');
  const placeholder = container.querySelector('.second-video-placeholder');

  video.addEventListener('loadedmetadata', () => {
    video.currentTime = video.duration - 0.01;
    video.pause();
  });

  container.addEventListener('mouseenter', () => {
    placeholder.style.opacity = 0;
    video.currentTime = 0;
    video.play();
    video.style.opacity = 1;
  });

  container.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = video.duration - 0.01;
    video.style.opacity = 0;
    placeholder.style.opacity = 1;
  });
});
