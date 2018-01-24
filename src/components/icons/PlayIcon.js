
import Icon from './Icon';

/**
 * This Icon was borrowed from the FontAwesome 5 free collection
 *
 * The original can be found here: https://fontawesome.com/icons/play?style=solid
 */
export default class PlayIcon extends Icon {
  getIconName() {
    return 'play-icon';
  }

  getScreenReaderText() {
    return 'Play Video';
  }

  getSvgPath() {
    return 'M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z';
  }

  getViewBox() {
    return '0 0 448 512';
  }
}
