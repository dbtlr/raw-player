
import Element from './Element';
import PlayIcon from './icons/PlayIcon';
import SpinnerIcon from './icons/SpinnerIcon';

export default class PlayOverlay extends Element {
  render() {
    const overlay = document.createElement('div');

    overlay.setAttribute('class', 'rp__play-overlay');

    this.button = new PlayIcon();
    this.button.onClick(this.handleClick.bind(this));

    overlay.appendChild(this.button.render());

    return overlay;
  }

  beforeOnClick() {
    const spinner = new SpinnerIcon();
    this.button.elem.replaceWith(spinner.render());
  }
}
