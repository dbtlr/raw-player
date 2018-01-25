
import Element from '../Element';
import Progress from './Progress';
import PlayToggle from './PlayToggle';

export default class Toolbar extends Element {
  constructor(video) {
    super();
    this.video = video;
  }

  renderElement() {
    const video = this.video;
    const controls = document.createElement('div');
    controls.setAttribute('class', 'rp__player-controls');

    const progress = new Progress();
    controls.appendChild(progress.render());

    const playToggle = new PlayToggle(this.video);
    controls.appendChild(playToggle.render());

    return controls;
  }
}
