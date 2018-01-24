
export default class PauseIcon {
  render() {
    const icon = document.createElement('div');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const title = document.createElement('title');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');;

    svg.setAttribute('version', '1.1');
    svg.setAttribute('viewBox', '0 0 20 20');

    icon.setAttribute('class', 'rp__icon rp__pause-icon');
    title.setAttribute('class', 'rp__screen-reader-text');
    title.innerHtml = 'Pause Video';

    path.setAttribute('d', 'M5 16v-12h3v12h-3zM12 4h3v12h-3v-12z');

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
    if (typeof this.onClickonClickEvent === 'function') {
      this['onClickEvent']();
    }
  }
}
