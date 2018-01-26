
import Element from '../Element';
import VolumeOnIcon from '../icons/VolumeOnIcon';
import VolumeOffIcon from '../icons/VolumeOffIcon';

export default class VolumeKnob extends Element {
  constructor(video) {
    super();
    this.video = video.getVideo();
    this.muted = false;
    this.volumeLevel = 1;
  }

  toggleVolume() {
    if (this.muted) {
      this.setButton(new VolumeOnIcon());
      this.muted = false;
      this.video.volume = this.volumeLevel;
    } else {
      this.setButton(new VolumeOffIcon());
      this.muted = true;
      this.video.volume = 0;
    }
  }

  setButton(icon) {
    icon.onClick(this.toggleVolume.bind(this));
    const button = icon.render();

    if (typeof this.button !== 'undefined') {
      this.button.replaceWith(button);
    }

    this.button = button;
  }

  renderElement() {
    this.volume = document.createElement('div');
    this.volume.setAttribute('class', 'rp__button-toggle rp__button-volume');

    this.setButton(new VolumeOnIcon());

    this.volume.appendChild(this.button);

    return this.volume;
  }
}
