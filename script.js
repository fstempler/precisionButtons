//const button2 = document.querySelector('.second-hover-video-button');
//const video2 = button2.querySelector('.second-btn-video');

//button2.addEventListener('mouseenter', () => {
//    video2.currentTime = 0;
//    video2.playbackRate = 1;
//    video2.style.opacity = 1;
//    video2.play();
//})

//video2.addEventListener('ended', () => {
//    video2.style.opacity = 0;
//});

const buttons = document.querySelectorAll('.second-hover-video-button');

buttons.forEach(button => {
    const video = button.querySelector('.second-btn-video');

    button.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.playbackRate = 1;
    video.style.opacity = 1;
    video.play();
});

video.addEventListener('ended', () => {
    video.style.opacity = 0;
});

});