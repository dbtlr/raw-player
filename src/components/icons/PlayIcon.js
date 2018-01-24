
export default class PlayIcon {
  render() {
    const icon = document.createElement('div');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const title = document.createElement('title');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');;

    svg.setAttribute('version', '1.1');
    svg.setAttribute('viewBox', '0 0 20 20');

    icon.setAttribute('class', 'rp__icon rp__play-icon');
    title.setAttribute('class', 'rp__screen-reader-text');
    title.innerHtml = 'Play Video';

    path.setAttribute('d', 'M5 4l10 6-10 6v-12z');

    svg.appendChild(title);
    svg.appendChild(path);
    icon.appendChild(svg);

    icon.addEventListener('click', this.handleClick.bind(this));

    this.elem = icon;

    return icon;
  }

  remove() {
    this.elem.remove();
  }

  onClick(func) {
    this.onClickEvent = func;
  }

  handleClick() {
    if (typeof this.onClickEvent === 'function') {
      this['onClickEvent']();
    }
  }
}
