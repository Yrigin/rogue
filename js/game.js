import { SoundEngine } from './soundEngine';
import { directions, getRandomDirection } from './tools';
import { Map } from './map';
export class Game {
  constructor(config, onEndGame) {
    this.map = new Map(
      config.mapSize,
      config.passages,
      config.rooms,
      config.boosts,
      config.entity,
    );
    this.soundEngine = new SoundEngine();

    this.playerDirection = directions.ZERO;
    this.playerAttack = false;
    this.onEndGame = onEndGame;
    this.gameLoopInterval = null;
    this.gameSpeed = config.gameSpeed;

    this.gameLoop = this.gameLoop.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.render = this.render.bind(this);
  }
  init() {
    this.soundEngine.init();
    this.soundEngine.playMusic();
    this.map.generate();
    this.map.spawnEntity();
    this.render();

    document.addEventListener('keyup', this.keyUp);
    document.addEventListener('keydown', this.keyDown);
    this.gameLoopInterval = setInterval(this.gameLoop, this.gameSpeed);
  }
  movePlayer(direction) {
    const player = this.map.player;
    const newX = player.x + direction.x;
    const newY = player.y + direction.y;
    if (
      this.map.existCell(newX, newY) &&
      this.map.getCell(newX, newY).type !== 'tileW' &&
      this.map.getCell(newX, newY).type !== 'tileE'
    ) {
      if (this.map.getCell(newX, newY).type === 'tileHP') {
        player.boostHealth(this.map.getCell(newX, newY).value);
        this.soundEngine.bounce();
      }
      if (this.map.getCell(newX, newY).type === 'tileSW') {
        player.boostAttack(this.map.getCell(newX, newY).value);
        this.soundEngine.bounce();
      }
      player.move(newX, newY);
      if (this.playerAttack) {
        this.map.getAroundEntity(newX, newY).forEach((entity) => {
          if (entity.type === 'tileE') {
            entity.damage(player.attack);

            if (entity.health <= 0) {
              entity.despawn();
              this.soundEngine.shot();
            }
          }
        });
      }
    }
  }
  moveEnemys() {
    this.map.enemys.forEach((enemy) => {
      const direction = getRandomDirection();
      const newX = enemy.x + direction.x;
      const newY = enemy.y + direction.y;
      if (
        this.map.existCell(newX, newY) &&
        this.map.getCell(newX, newY).type === 'tile'
      ) {
        enemy.move(newX, newY);
        this.map.getAroundEntity(newX, newY).forEach((entity) => {
          if (entity.type === 'tileP') {
            entity.damage(enemy.attack);
          }
        });
      }
    });
  }

  gameLoop() {
    this.movePlayer(this.playerDirection);
    this.moveEnemys();

    if (this.map.player.health <= 0) {
      this.stopGame(false);
    } else if (this.map.enemysCount === 0) {
      this.stopGame(true);
    } else {
      this.render();
    }
  }
  stopGame(win) {
    if (!win) {
      this.soundEngine.explosion();
    }
    this.soundEngine.stopMusic();
    clearInterval(this.gameLoopInterval);
    this.onEndGame(win);
  }
  keyUp() {
    this.playerDirection = directions.ZERO;
    this.playerAttack = false;
  }

  keyDown(e) {
    switch (e.key) {
      case 'w':
        this.playerDirection = directions.UP;
        break;
      case 's':
        this.playerDirection = directions.DOWN;
        break;
      case 'a':
        this.playerDirection = directions.LEFT;
        break;
      case 'd':
        this.playerDirection = directions.RIGHT;
        break;
      case ' ':
        this.playerAttack = true;
    }
    console.log(this.playerDirection);
  }
  render() {
    const field = document.getElementById('field');
    // clear field
    field.textContent = '';
    this.map.map.forEach((row) => {
      const gameRow = document.createElement('div');
      gameRow.className = 'row';
      row.forEach((el) => {
        const tile = document.createElement('div');
        tile.className = `tile ${el.cellType}`;
        if (el.type === 'tileP' || el.type === 'tileE') {
          // elemDiv.style.top = 25 * (el.y + 1);
          // elemDiv.style.left = 25 * (el.x + 1);
          tile.innerHTML = `<div class="health" style="width: ${el.health}%;"></div> `;
        }

        gameRow.appendChild(tile);
      });

      field.appendChild(gameRow);

      // update cooldown
      const coolDownEl = document.getElementById('cooldown');
      const perCoolDown =
        Math.round((this.map.player.coolDown * 0.2 * 100) / 1000) * 5;

      coolDownEl.className = `progress-radial progress-${perCoolDown}`;

      //update player health and attack
      const healthEl = document.getElementById('player-health');
      healthEl.innerText = this.map.player.health;
      const attackEl = document.getElementById('player-attack');
      attackEl.innerText = this.map.player._attack;
      attackEl.style.color = this.playerAttack ? 'red' : 'white';
    });
  }
}
