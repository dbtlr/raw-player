
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

    this.elem.setAttribute('class', 'rp__button-toggle rp__button-play');

    this.video.getVideo().addEventListener('playing', this.setPlaying.bind(this));
    this.video.getVideo().addEventListener('pause', this.setPaused.bind(this));

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
