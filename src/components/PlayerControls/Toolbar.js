
import Element from '../Element';
import Progress from './Progress';
import PlayToggle from './PlayToggle';
import FullScreenToggle from './FullScreenToggle';

export default class Toolbar extends Element {
  constructor(video) {
    super();
    this.video = video;
  }

  renderElement() {
    const video = this.video;
    const controls = document.createElement('div');
    controls.setAttribute('class', 'rp__player-controls');

    const progress = new Progress(this.video);
    controls.appendChild(progress.render());

    const playToggle = new PlayToggle(this.video);
    controls.appendChild(playToggle.render());

    const expandToggle = new FullScreenToggle(this.video);
    controls.appendChild(expandToggle.render());

    return controls;
  }
}
