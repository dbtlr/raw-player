
import Element from '../Element';

export default class Progress extends Element {
  constructor(video) {
    super();
    this.video = video.getVideo();

    this.video.addEventListener('timeupdate', this.handleProgress.bind(this));
  }

  handleScrub(e) {
    const scrubTime = (e.offsetX / this.progress.offsetWidth) * this.video.duration;
    this.video.currentTime = scrubTime;
  }

  handleProgress() {
    const percent = (this.video.currentTime / this.video.duration) * 100;

    if (typeof this.progressBar !== 'undefined') {
      this.progressBar.style.flexBasis = `${percent}%`;
    }
  }

  renderElement() {
    this.progress = document.createElement('div');
    this.progress.setAttribute('class', 'rp__progress');

    this.progressBar = document.createElement('div');
    this.progressBar.setAttribute('class', 'rp__progress__filled');

    this.progress.appendChild(this.progressBar);

    let mousedown = false;

    this.progress.addEventListener('click', this.handleScrub.bind(this));
    this.progress.addEventListener('mousemove', (e) => mousedown && this.handleScrub(e));
    this.progress.addEventListener('mousedown', () => mousedown = true);
    this.progress.addEventListener('mouseup', () => mousedown = false);

    return this.progress;
  }
}
