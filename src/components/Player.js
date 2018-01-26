import Poster from './Poster';
import Video from './Video';

export default class Player {
  constructor(target) {
    this.target = target;
    this.targetWidth = this.target.parentElement.offsetWidth;
    this.targetHeight = this.targetWidth * (9 / 16);

    this.options = {
      autoPlay: target.autoplay || false,
      loop: target.loop || false,
      src: target.src || '',
      poster: target.poster || '',
    };
  }

  loadVideo() {
    this.video = new Video(this.options.src, false, this.options.loop === 'true');
    this.player.appendChild(this.video.render());
  }

  render() {
    const self  = this;
    this.player = document.createElement('div');

    this.player.setAttribute('class', 'raw-player');
    this.player.style = `width:${this.targetWidth}px;height:${this.targetHeight}px;`;

    if (this.options.autoPlay === true) {
      self.loadVideo();
    } else {
      const poster = new Poster(this.options.poster);
      this.player.appendChild(poster.render());

      poster.onClick(() => {
        self.loadVideo();
        this.video.getVideo().addEventListener('canplay', () => {
          poster.remove();
          this.video.getVideo().play();
        });
      });
    }

    this.target.replaceWith(this.player);
  }
}
