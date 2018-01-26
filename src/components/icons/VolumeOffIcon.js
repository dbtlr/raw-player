
import Icon from './Icon';

/**
 * This Icon was borrowed from the FontAwesome 5 free collection
 *
 * The original can be found here: https://fontawesome.com/icons/volume-off?style=solid
 */
export default class VolumeOffIcon extends Icon {
  getIconName() {
    return 'volume-off-icon';
  }

  getScreenReaderText() {
    return 'Turn On Volume';
  }

  getSvgPath() {
    return 'M256 88.017v335.964c0 21.438-25.943 31.998-40.971 16.971L126.059 352H24c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h102.059l88.971-88.954c15.01-15.01 40.97-4.49 40.97 16.971z';
  }

  getViewBox() {
    return '0 0 256 512';
  }
}
