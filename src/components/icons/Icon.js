
export default class Icon {
  constructer() {

  }

  getIconName() {
    return 'default-icon';
  }

  getScreenReaderText() {
    return '';
  }

  getSvgPath() {
    return '';
  }

  getViewBox() {
    return '0 0 448 512';
  }

  render() {
    const icon = document.createElement('div');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const title = document.createElement('title');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');;

    svg.setAttribute('version', '1.1');
    svg.setAttribute('viewBox', this.getViewBox());

    icon.setAttribute('class', 'rp__icon rp__' + this.getIconName());
    title.setAttribute('class', 'rp__screen-reader-text');
    title.innerHtml = this.getScreenReaderText();

    path.setAttribute('d', this.getSvgPath());

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
