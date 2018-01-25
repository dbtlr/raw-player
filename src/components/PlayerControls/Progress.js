
import Element from '../Element';

export default class Progress extends Element {
  renderElement() {
    const controls = document.createElement('div');
    controls.setAttribute('class', 'rp__controls-progress');

    const filled = document.createElement('div');
    filled.setAttribute('class', 'rp__controls-progress__filled');

    controls.appendChild(filled);

    return controls;
  }
}
