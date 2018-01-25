
import PlayIcon from './icons/PlayIcon';
import SpinnerIcon from './icons/SpinnerIcon';

export default class Element {
  constructor() {}

  renderElement() {
    const elem = document.createElement('div');
    return elem;
  }

  render() {
    this.elem = this.renderElement();
    return this.elem;
  }

  onClick(func) {
    this.onClickEvent = func;
  }

  remove() {
    if (typeof this.elem !== 'undefined') {
      this.elem.remove();
    }
  }

  handleClick() {
    this.beforeOnClick();
    if (typeof this.onClickEvent === 'function') {
      this['onClickEvent']();
    }
    this.afterOnClick();
  }

  beforeOnClick() {}
  afterOnClick() {}
}
