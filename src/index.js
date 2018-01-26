
import Player from './components/Player';

const players = document.querySelectorAll('.raw-player');

players.forEach(node => {
  const player = new Player(node);
  player.render();
});
