
import PlayIcon from '../icons/PlayIcon';
import PauseIcon from '../icons/PauseIcon';

export default class PlayToggle {
  constructor(video) {
    this.video = video;
  }

  setButton(icon) {
    icon.onClick(this.handleClick.bind(this));
    this.button = icon.render();

    while (this.toggle.firstChild) {
      this.toggle.removeChild(this.toggle.firstChild);
    }

    this.toggle.appendChild(this.button);
  }

  render() {
    this.toggle = document.createElement('div');
    this.setButton(new PlayIcon());

    this.toggle.setAttribute('class', 'rp__play-toggle');

    this.video.elem.addEventListener('playing', this.setPlaying.bind(this));
    this.video.elem.addEventListener('pause', this.setPaused.bind(this));

    return this.toggle;
  }

  setPlaying() {
    this.setButton(new PauseIcon());
  }

  setPaused() {
    this.setButton(new PlayIcon());
  }

  onClick(func) {
    this.onClickEvent = func;
  }

  handleClick() {
    this.video.togglePlay();
  }
}
