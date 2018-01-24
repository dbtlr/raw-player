
import Icon from './Icon';

/**
 * This Icon was borrowed from the FontAwesome 5 free collection
 *
 * The original can be found here: https://fontawesome.com/icons/pause?style=solid
 */
export default class PauseIcon extends Icon {
  getIconName() {
    return 'pause-icon';
  }

  getScreenReaderText() {
    return 'Pause Video';
  }

  getSvgPath() {
    return 'M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z';
  }

  getViewBox() {
    return '0 0 448 512';
  }
}
