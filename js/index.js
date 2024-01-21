import '../css/style.css';
import '../css/modal.css';
import '../css/game.css';
import { Game } from './game';

const normalConfig = {
  mapSize: { w: 40, h: 24 },
  passages: { min: 3, max: 5 },
  rooms: { min: 5, max: 10, minSize: 3, maxSize: 8 },
  boosts: { health: 50, attack: 50 },
  entity: { playerAttack: 50, enemyAttack: 10 },
  gameSpeed: 200,
};
const hardcoreConfig = {
  mapSize: { w: 40, h: 24 },
  passages: { min: 3, max: 5 },
  rooms: { min: 5, max: 10, minSize: 3, maxSize: 8 },
  boosts: { health: 50, attack: 25 },
  entity: { playerAttack: 25, enemyAttack: 25 },
  gameSpeed: 100,
};

class GameManager {
  constructor() {
    this.modal = null;
    this.gameConfig = {};
    this.game = null;
    this.hardcore = false;

    this.nextRound = this.nextRound.bind(this);
    this.startGame = this.startGame.bind(this);
    this.onEndGame = this.onEndGame.bind(this);
    this.changeGameModeHandler = this.changeGameModeHandler.bind(this);
  }
  init() {
    this.showModal('start');
    const startGameButton = document.getElementById('start-game');
    startGameButton.addEventListener('click', this.startGame);
    const nextGameButtons = document.getElementsByClassName(
      'modal-button-nextround',
    );

    for (let btn of nextGameButtons) {
      btn.addEventListener('click', this.nextRound);
    }
    const hardcoreSwitch = document.getElementById('hardcore');
    hardcoreSwitch.addEventListener('change', this.changeGameModeHandler);
  }
  changeGameModeHandler(value) {
    this.hardcore = value.currentTarget.checked;
  }
  nextRound() {
    this.showModal('start');
  }
  startGame() {
    this.closeModal();
    const config = this.hardcore ? hardcoreConfig : normalConfig;
    this.game = new Game(config, this.onEndGame);
    this.game.init();
  }

  onEndGame(win) {
    if (win) {
      this.showModal('win');
    } else {
      this.showModal('loss');
    }
  }

  showModal(modalName) {
    if (this.modal !== null) {
      this.closeModal();
    }
    this.modal = modalName;
    const modalDiv = document.getElementById(`modal-${modalName}`);
    modalDiv.style.display = 'block';
  }
  closeModal() {
    const modalDiv = document.getElementById(`modal-${this.modal}`);
    modalDiv.style.display = 'none';
  }
}
// const game = new Game();
// game.init();
const gameManager = new GameManager();
gameManager.init();
