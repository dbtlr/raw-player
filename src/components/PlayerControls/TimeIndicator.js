
import Element from '../Element';

export default class TimeIndicator extends Element {
  constructor(video) {
    super();
    this.video = video.getVideo();

    this.video.addEventListener('timeupdate', this.updateProgress.bind(this));
  }

  normalizeTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    function str_pad_left(string, pad, length) {
      return (new Array(length+1).join(pad)+string).slice(-length);
    }

    return minutes + ':' + str_pad_left(seconds, '0', 2);
  }

  updateProgress() {
    const currentTime = this.normalizeTime(this.video.currentTime);
    const totalTime = this.normalizeTime(this.video.duration);

    this.time.innerHTML = `${currentTime} / ${totalTime}`;
  }

  renderElement() {
    this.time = document.createElement('div');
    this.time.setAttribute('class', 'rp__time-indicator');

    this.updateProgress();

    return this.time;
  }
}
