
import PlayIcon from './icons/PlayIcon';
import SpinnerIcon from './icons/SpinnerIcon';

export default class PosterOverlay {
  constructor(src) {
    this.src = src;
  }

  render() {
    this.poster = document.createElement('div');
    const overlay = document.createElement('div');
    this.button = new PlayIcon();

    this.poster.setAttribute('class', 'rp__poster');
    overlay.setAttribute('class', 'rp__poster-bg');

    this.poster.style = `background-image:url(${this.src})`;

    this.button.onClick(this.handleClick.bind(this));

    this.poster.appendChild(overlay);
    this.poster.appendChild(this.button.render());

    return this.poster;
  }

  onClick(func) {
    this.onClickEvent = func;
  }

  handleClick() {
    if (typeof this.onClickEvent === 'function') {
      const spinner = new SpinnerIcon();
      this.button.elem.replaceWith(spinner.render());
      this['onClickEvent']();
    }
  }
}
