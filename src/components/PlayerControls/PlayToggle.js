
import Element from '../Element';
import PlayIcon from '../icons/PlayIcon';
import PauseIcon from '../icons/PauseIcon';

export default class PlayToggle extends Element {
  constructor(video) {
    super();
    this.video = video;
  }

  setButton(icon) {
    icon.onClick(this.handleClick.bind(this));
    this.button = icon.render();

    while (this.elem.firstChild) {
      this.elem.removeChild(this.elem.firstChild);
    }

    this.elem.appendChild(this.button);
  }

  renderElement() {
    this.elem = document.createElement('div');
    this.setButton(new PlayIcon());

    this.elem.setAttribute('class', 'rp__play-toggle');

    this.video.elem.addEventListener('playing', this.setPlaying.bind(this));
    this.video.elem.addEventListener('pause', this.setPaused.bind(this));

    return this.elem;
  }

  setPlaying() {
    this.setButton(new PauseIcon());
  }

  setPaused() {
    this.setButton(new PlayIcon());
  }

  afterOnClick() {
    this.video.togglePlay();
  }
}
