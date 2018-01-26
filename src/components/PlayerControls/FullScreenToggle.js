
import Element from '../Element';
import ExpandIcon from '../icons/ExpandIcon';
import CompressIcon from '../icons/CompressIcon';

export default class FullScreenToggle extends Element {
  constructor(player) {
    super();
    this.player = player;

    this.addFullscreenEvents();
  }

  isFullscreen() {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      return false;
    }

    return true;
  }

  onFullScreenChange() {
    if (this.isFullscreen()) {
      this.button.replaceWith(this.getButton(new CompressIcon()));

    } else {
      this.button.replaceWith(this.getButton(new ExpandIcon()));
    }
  }

  addFullscreenEvents() {
    const callback = this.onFullScreenChange.bind(this);

    if (document.fullscreenEnabled) {
      document.addEventListener('fullscreenchange', callback);

    } else if (document.mozFullScreenEnabled) {
      document.addEventListener('mozfullscreenchange', callback);

    } else if (document.webkitFullscreenEnabled) {
      document.addEventListener('webkitfullscreenchange', callback); //Safari
      document.addEventListener('fullscreenChange', callback); // Edge

    } else if (document.msFullscreenEnabled) {
      document.addEventListener('MSFullscreenChange', callback);
    }
  }

  enterFullscreen() {
    const player = this.player.elem;
    const userAgent = navigator.userAgent.toLowerCase();

    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.msRequestFullscreen) {
      player.msRequestFullscreen();
    } else if (player.mozRequestFullScreen) {
      player.parentElement.mozRequestFullScreen();
    } else if (userAgent.indexOf('edge') != -1) {
      player.parentElement.webkitRequestFullscreen();
    } else if (player.webkitRequestFullscreen) {
      player.webkitRequestFullscreen();
    }
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  getButton(icon) {
    icon.onClick(this.toggleFullscreen.bind(this));

    this.button = icon.render();

    return this.button;
  }

  toggleFullscreen() {
    const player = this.player.elem;

    if (this.isFullscreen()) {
      this.exitFullscreen();
    } else {
      this.enterFullscreen();
    }
  }

  renderElement() {
    const container = document.createElement('div');
    container.setAttribute('class', 'rp__button-toggle rp__button-fs');
    container.appendChild(this.getButton(new ExpandIcon()));

    return container;
  }
}
