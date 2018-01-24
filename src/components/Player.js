import PosterOverlay from './PosterOverlay';
import Video from './Video';

export default class Player {
  constructor(target) {
    this.target = target;
    this.targetWidth = this.target.parentElement.offsetWidth;
    this.targetHeight = this.targetWidth * (9 / 16);

    console.log(target);

    this.options = {
      autoPlay: target.autoplay || false,
      loop: target.loop || false,
      src: target.src || '',
      poster: target.poster || '',
    };

    console.log(this.options);
  }

  loadVideo() {
    const video = new Video(this.options.src, true, this.options.loop === 'true');
    this.player.appendChild(video.render());
  }

  render() {
    const self  = this;
    this.player = document.createElement('div');

    this.player.setAttribute('class', 'raw-player');
    this.player.style = `width:${this.targetWidth}px;height:${this.targetHeight}px;`;

    if (this.options.autoPlay === true) {
      self.loadVideo();
    } else {
      const posterOverlay = new PosterOverlay(this.options.poster);
      this.player.appendChild(posterOverlay.render());

      posterOverlay.onClick(() => {
        self.loadVideo();
      });
    }

    this.target.replaceWith(this.player);
  }
}
