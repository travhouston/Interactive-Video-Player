
// Variables
  
const video = document.querySelector('video');
const span = document.querySelectorAll('span');
  
// Event Listeners
  
video.addEventListener("timeupdate", () => {
    for (i = 0; i < span.length; i += 1)
        if (video.currentTime > span[i].getAttribute('data-start') &&
            video.currentTime < span[i].getAttribute('data-end')) {
            // highlight text if conditions are met
            span[i].style.color ="#ff8200";
        } else {
            // leaves color the same as original
            span[i].style.color = '#383938';
        }
    });
  
    for (i = 0; i < span.length; i += 1) { 
        // click through transcriptions to jump around in video
        span[i].addEventListener('click', (event) =>  {
            video.currentTime = event.target.getAttribute('data-start');
            video.play();
    });
}