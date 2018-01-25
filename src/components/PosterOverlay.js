
import Element from './Element';
import PlayOverlay from './PlayOverlay';
import PlayIcon from './icons/PlayIcon';
import SpinnerIcon from './icons/SpinnerIcon';

export default class PosterOverlay extends Element {
  constructor(src) {
    super();
    this.src = src;
  }

  renderElement() {
    const poster = document.createElement('div');
    const overlay = new PlayOverlay();

    poster.setAttribute('class', 'rp__poster');

    poster.style = `background-image:url(${this.src})`;

    overlay.onClick(this.handleClick.bind(this));
    poster.appendChild(overlay.render());

    return poster;
  }
}
