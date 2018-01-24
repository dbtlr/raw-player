
import PlayIcon from './icons/PlayIcon';

export default class PosterOverlay {
  constructor(src) {
    this.src = src;
  }

  render() {
    this.poster = document.createElement('div');
    const overlay = document.createElement('div');
    const icon = new PlayIcon();

    this.poster.setAttribute('class', 'rp__poster');
    overlay.setAttribute('class', 'rp__poster-bg');

    this.poster.style = `background-image:url(${this.src})`;

    icon.onClick(this.handleClick.bind(this));

    this.poster.appendChild(overlay);
    this.poster.appendChild(icon.render());

    return this.poster;
  }

  onClick(func) {
    this.onClickEvent = func;
  }

  handleClick() {
    this.poster.remove();
    if (typeof this.onClickEvent === 'function') {
      this['onClickEvent']();
    }
  }
}
