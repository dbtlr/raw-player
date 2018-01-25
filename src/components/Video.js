
import Element from './Element';
import Toolbar from './PlayerControls/Toolbar';
import PlayIcon from './icons/PlayIcon';

export default class Video extends Element {
  constructor(src, autoPlay=false, loop=false) {
    super();
    this.src = src;
    this.autoPlay = autoPlay;
    this.loop = loop;
    this.elem = document.createElement('video');
  }

  getVideo() {
    this.elem.src = this.src;
    this.elem.style = 'background:transparent;max-width:100%;max-height:100%';
    if (this.loop) {
      this.elem.loop = true;
    }

    this.elem.addEventListener('loadedmetadata', () => {
      const toolbar = new Toolbar(this);
      this.container.appendChild(toolbar.render());

      if (this.autoPlay) {
        this.elem.play();
      } else {
        this.showPauseOverlay();
      }
    });

    return this.elem;
  }

  getOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.setAttribute('class', 'rp__video-overlay');
    this.overlay.addEventListener('click', this.togglePlay.bind(this));

    const bg = document.createElement('div');
    bg.setAttribute('class', 'rp__video-overlay__bg');

    this.overlay.appendChild(bg);

    return this.overlay;
  }

  showPauseOverlay() {
    this.container.setAttribute('class', 'rp__video');

    if (typeof this.playIcon === 'object') {
      this.playIcon.remove();
    }
  }

  hidePauseOverlay() {
    this.container.setAttribute('class', 'rp__video paused');

    this.playIcon = new PlayIcon();
    this.overlay.appendChild(this.playIcon.render());
  }

  togglePlay() {
    if (this.video.paused) {
      this.video.play();
      this.showPauseOverlay();

    } else {
      this.video.pause();
      this.hidePauseOverlay();
    }
  }

  render() {
    this.container = document.createElement('div');

    this.overlay = this.getOverlay();
    this.video   = this.getVideo();

    this.container.setAttribute('class', 'rp__video');

    this.container.appendChild(this.video);
    this.container.appendChild(this.overlay);

    return this.container;
  }
}
