import Progress from './Progress';
import PlayToggle from './PlayToggle';

export default class Toolbar {
  render() {
    const controls = document.createElement('div');
    controls.setAttribute('class', 'rp__player-controls');

    const progress = new Progress();
    controls.appendChild(progress.render());

    const playToggle = new PlayToggle();
    controls.appendChild(playToggle.render());

    return controls;
  }
}
