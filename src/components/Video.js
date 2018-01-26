
import Element from './Element';
import Toolbar from './PlayerControls/Toolbar';
import PlayIcon from './icons/PlayIcon';

export default class Video extends Element {
  constructor(src, autoPlay=false, loop=false) {
    super();
    this.src = src;
    this.autoPlay = autoPlay;
    this.loop = loop;
  }

  getVideo() {
    if (typeof this.video === 'undefined') {
      this.video = document.createElement('video');
      this.video.src = this.src;
      this.video.controle = false;
      this.video.style = 'background:transparent;max-width:100%;max-height:100%';
      if (this.loop) {
        this.video.loop = true;
      }

      this.video.addEventListener('loadedmetadata', () => {
        const toolbar = new Toolbar(this);
        this.container.appendChild(toolbar.render());

        if (this.autoPlay) {
          this.video.play();
        } else {
          this.showPauseOverlay();
        }
      });

      this.video.addEventListener('play', this.hidePauseOverlay.bind(this));
      this.video.addEventListener('pause', this.showPauseOverlay.bind(this));
    }

    return this.video;
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

  hidePauseOverlay() {
    this.container.setAttribute('class', 'rp__video');

    if (typeof this.playIcon === 'object') {
      this.playIcon.remove();
    }
  }

  showPauseOverlay() {
    this.container.setAttribute('class', 'rp__video paused');

    this.playIcon = new PlayIcon();
    this.overlay.appendChild(this.playIcon.render());
  }

  togglePlay() {
    if (this.video.paused) {
      this.video.play();

    } else {
      this.video.pause();
    }
  }

  renderElement() {
    this.container = document.createElement('div');

    this.container.setAttribute('class', 'rp__video');

    this.container.appendChild(this.getVideo());
    this.container.appendChild(this.getOverlay());

    return this.container;
  }
}
