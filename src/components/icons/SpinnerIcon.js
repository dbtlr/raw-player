
import Icon from './Icon';

/**
 * This Icon was borrowed from the FontAwesome 5 free collection
 *
 * The original can be found here: https://fontawesome.com/icons/spinner?style=solid
 */
export default class SpinnerIcon extends Icon {
  constructor(text='Loading...') {
    super();
    this.readerText = text;
  }

  getIconName() {
    return 'spinner-icon';
  }

  getScreenReaderText() {
    return this.readerText;
  }

  getSvgPath() {
    return 'M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z';
  }

  getViewBox() {
    return '0 0 512 512';
  }
}
