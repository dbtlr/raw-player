import PosterOverlay from './PosterOverlay';
import Video from './Video';

export default class Player {
  constructor(target) {
    this.target = target;
    this.targetWidth = this.target.parentElement.offsetWidth;
    this.targetHeight = this.targetWidth * (9 / 16);

    this.autoPlay = false;
    this.loop = false;
    this.src = target.src;
    this.poster = target.poster || '';
  }

  loadVideo() {
    const video = new Video(this.src, true);
    this.player.appendChild(video.render());
  }

  render() {
    const self  = this;
    this.player = document.createElement('div');

    this.player.setAttribute('class', 'raw-player');
    this.player.style = `width:${this.targetWidth}px;height:${this.targetHeight}px;`;

    if (this.autoPlay) {
      self.loadVideo();
    } else {
      const posterOverlay = new PosterOverlay(this.poster);
      this.player.appendChild(posterOverlay.render());

      posterOverlay.onClick(() => {
        self.loadVideo();
      });
    }

    this.target.replaceWith(this.player);
  }
}
