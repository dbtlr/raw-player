
import Element from '../Element';

export default class Progress extends Element {
  constructor(video) {
    super();
    this.video = video;

    this.video.elem.addEventListener('timeupdate', this.handleProgress.bind(this));
  }

  handleProgress() {
    const percent = (this.video.elem.currentTime / this.video.elem.duration) * 100;

    if (typeof this.progressBar !== 'undefined') {
      this.progressBar.style.flexBasis = `${percent}%`;
    }
  }

  renderElement() {
    const controls = document.createElement('div');
    controls.setAttribute('class', 'rp__controls-progress');

    this.progressBar = document.createElement('div');
    this.progressBar.setAttribute('class', 'rp__controls-progress__filled');

    controls.appendChild(this.progressBar);

    return controls;
  }
}
