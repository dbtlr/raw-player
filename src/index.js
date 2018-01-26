
import Player from './components/Player';
import './sass/raw-player.scss';

const players = document.querySelectorAll('.raw-player');

players.forEach(node => {
  const player = new Player(node);
  player.render();
});
