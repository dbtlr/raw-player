
export default class Progress {
  render() {
    const controls = document.createElement('div');
    controls.setAttribute('class', 'rp__controls-progress');

    const filled = document.createElement('div');
    filled.setAttribute('class', 'rp__controls-progress__filled');

    controls.appendChild(filled);

    return controls;
  }
}
