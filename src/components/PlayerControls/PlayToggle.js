
export default class PlayToggle {
  render() {
    const toggle = document.createElement('div');
    const svg = document.createElement('svg');
    const title = document.createElement('title');
    const path = document.createElement('path');

    toggle.setAttribute('class', 'rp_play-toggle');

    svg.setAttribute('version', '1.1');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('viewBox', '0 0 20 20');

    title.setAttribute('class', 'rp__screen-reader-text');
    title.innerHtml = 'Play Video';

    path.setAttribute('d', 'M5 4l10 6-10 6v-12z');

    toggle.setAttribute('class', 'rp__play-overplay')

    svg.appendChild(title);
    svg.appendChild(path);
    toggle.appendChild(svg);

    return toggle;
  }
}
