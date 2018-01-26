
import Element from '../Element';
import Progress from './Progress';
import PlayToggle from './PlayToggle';
import FullScreenToggle from './FullScreenToggle';
import VolumeKnob from './VolumeKnob';
import TimeIndicator from './TimeIndicator';

export default class Toolbar extends Element {
  constructor(video) {
    super();
    this.video = video;
  }

  renderElement() {
    const video = this.video;
    const toolbar = document.createElement('div');
    const controls = document.createElement('div');
    const left = document.createElement('div');
    const right = document.createElement('div');

    toolbar.setAttribute('class', 'rp__toolbar');
    controls.setAttribute('class', 'rp__controls');
    left.setAttribute('class', 'rp__controls__left');
    right.setAttribute('class', 'rp__controls__right');

    const progress = new Progress(this.video);
    toolbar.appendChild(progress.render());

    controls.appendChild(left);

    const playToggle = new PlayToggle(this.video);
    left.appendChild(playToggle.render());

    const volumeKnob = new VolumeKnob(this.video);
    left.appendChild(volumeKnob.render());

    const timeIndicator = new TimeIndicator(this.video);
    controls.appendChild(timeIndicator.render());

    const expandToggle = new FullScreenToggle(this.video);
    right.appendChild(expandToggle.render());

    controls.appendChild(right);

    toolbar.appendChild(controls);

    return toolbar;
  }
}
