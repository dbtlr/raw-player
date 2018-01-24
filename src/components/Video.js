
import Toolbar from './PlayerControls/Toolbar';
import PlayIcon from './icons/PlayIcon';

export default class Video {
  constructor(src, autoPlay=false, loop=false) {
    this.src = src;
    this.autoPlay = autoPlay;
    this.loop = loop;
  }

  getVideo() {
    const video = document.createElement('video');

    video.src = this.src;
    video.style = 'background:transparent;max-width:100%;max-height:100%';
    if (this.loop) {
      video.loop = "true";
    }


    video.addEventListener('loadedmetadata', () => {
      if (this.autoPlay) {
        video.play();
      }
    });

    return video;
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

  togglePlay() {
    if (this.video.paused) {
      this.video.play();
      this.container.setAttribute('class', 'rp__video');

      if (typeof this.playIcon === 'object') {
        this.playIcon.remove();
      }

    } else {
      this.video.pause();
      this.container.setAttribute('class', 'rp__video paused');

      this.playIcon = new PlayIcon();
      this.overlay.appendChild(this.playIcon.render());
    }
  }

  render() {
    this.container = document.createElement('div');

    this.overlay = this.getOverlay();
    this.video   = this.getVideo();

    this.container.setAttribute('class', 'rp__video');

    this.container.appendChild(this.video);
    this.container.appendChild(this.overlay);

    const toolbar = new Toolbar();
    this.container.appendChild(toolbar.render());

    return this.container;
  }
}
