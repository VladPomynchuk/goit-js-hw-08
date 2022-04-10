import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const onTimeSave = e => {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(STORAGE_KEY, seconds);
    })
    .catch(function (error) {
      console.log('error');
    });
};

player.on('timeupdate', throttle(onTimeSave, 1000));

let CurrentTime = localStorage.getItem(STORAGE_KEY);

player
  .setCurrentTime(CurrentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
