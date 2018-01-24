import Progress from './Progress';
import PlayToggle from './PlayToggle';

export default class Toolbar {
  constructor(video) {
    this.video = video;
  }

  render() {
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
