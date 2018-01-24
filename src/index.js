
import Player from './components/Player';
import './player.css';

const players = document.querySelectorAll('.raw-player');

players.forEach(node => {
  const player = new Player(node);
  player.render();
});
