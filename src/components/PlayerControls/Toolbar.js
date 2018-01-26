
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
    toolbar.setAttribute('class', 'rp__toolbar');
    controls.setAttribute('class', 'rp__controls');

    const progress = new Progress(this.video);
    toolbar.appendChild(progress.render());

    const playToggle = new PlayToggle(this.video);
    controls.appendChild(playToggle.render());

    const volumeKnob = new VolumeKnob(this.video);
    controls.appendChild(volumeKnob.render());

    const timeIndicator = new TimeIndicator(this.video);
    controls.appendChild(timeIndicator.render());

    const expandToggle = new FullScreenToggle(this.video);
    controls.appendChild(expandToggle.render());

    toolbar.appendChild(controls);

    return toolbar;
  }
}
