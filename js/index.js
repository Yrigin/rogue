import { Howl } from "howler";

import "../css/style.css";
import "../css/modal.css";
const directions = {
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: +1, y: 0 },
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  ZERO: { x: 0, y: 0 },
};
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
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const getRandomDirection = () => {
  const randomInt = getRandomInt(0, 4);
  switch (randomInt) {
    case 0:
      return directions.LEFT;
    case 1:
      return directions.RIGHT;
    case 2:
      return directions.UP;
    case 3:
      return directions.DOWN;
  }
};

class Cell {
  constructor(cellType, x, y) {
    this.cellType = cellType;
    (this.posX = x), (this.posY = y);
  }
  get type() {
    return this.cellType;
  }
  get x() {
    return this.posX;
  }
  get y() {
    return this.posY;
  }
  get pos() {
    return { x: this.posX, y: this.posY };
  }
  setPosition(x, y) {
    this.posX = x;
    this.posY = y;
  }
}
class Wall extends Cell {
  constructor(x, y) {
    super("tileW", x, y);
  }
}
class Tile extends Cell {
  constructor(x, y) {
    super("tile", x, y);
  }
}

class Entity extends Cell {
  constructor(cellType, x, y, health, attack, moveHandler) {
    super(cellType, x, y);
    this._health = health;
    this._attack = attack;
    this.moveHandler = moveHandler;
  }
  get attack() {
    return this._attack;
  }
  get health() {
    return this._health;
  }

  boostAttack(attack) {
    this._attack = Math.min(100, attack + this.attack);
  }
  boostHealth(health) {
    this._health = Math.min(100, health + this.health);
  }
  damage(value) {
    this._health -= value;
  }
  isAlive() {
    return this._health > 0;
  }
  move(x, y) {
    this.moveHandler(x, y);
    this.setPosition(x, y);
  }
}

class Player extends Entity {
  constructor(x, y, health, attack, moveHandler) {
    super("tileP", x, y, health, attack, moveHandler);

    this.lastAttack = Date.now();
  }

  get attack() {
    const curTime = Date.now();
    if (curTime - this.lastAttack > 500) {
      this.lastAttack = curTime;
      return this._attack;
    } else {
      return 0;
    }
  }

  get coolDown() {
    const curTime = Date.now();
    return curTime - this.lastAttack;
  }
}
class Enemy extends Entity {
  constructor(x, y, health, attack, id, moveHandler, onDespawn) {
    super("tileE", x, y, health, attack, moveHandler);
    this._id = id;
    this._onDespawn = onDespawn;
    this.moveHandler = moveHandler;
    this.lastAttack = Date.now();
  }
  get id() {
    return this._id;
  }
  get attack() {
    const curTime = Date.now();
    if (curTime - this.lastAttack > 250) {
      this.lastAttack = curTime;
      return this._attack;
    } else {
      return Math.round(this._attack / 2);
    }
  }

  set id(id) {
    this._id = id;
  }
  move(x, y) {
    this.moveHandler(this.id, x, y);
    this.setPosition(x, y);
  }
  despawn() {
    this._onDespawn(this.id);
  }
}
class Boost extends Cell {
  constructor(cellType, x, y, boostValue) {
    super(cellType, x, y);
    this.boostValue = boostValue;
  }
  get value() {
    return this.boostValue;
  }
  // set()
}
class HPBoost extends Boost {
  constructor(x, y, boostValue) {
    super("tileHP", x, y, boostValue);
  }
}

class AtackBoost extends Boost {
  constructor(x, y, boostValue) {
    super("tileSW", x, y, boostValue);
  }
}

class Map {
  constructor(mapSize, passages, rooms, boosts, entity) {
    this.mapSize = mapSize;
    this.passages = passages;
    this.rooms = rooms;
    (this.boostConfig = boosts), (this.entityСonfig = entity);

    this.gameMap = [];
    this.player = null;
    this.enemys = [];

    this.onMovePlayer = this.onMovePlayer.bind(this);
    this.omMoveEnemy = this.omMoveEnemy.bind(this);
    this.onDespawnEnemy = this.onDespawnEnemy.bind(this);
  }
  generate() {
    // заполняем все карту стенами
    this.gameMap = Array.from(Array(this.mapSize.h), () =>
      new Array(this.mapSize.w).fill(new Wall())
    );

    const numRooms = getRandomInt(this.rooms.min, this.rooms.max);
    const rooms = [];
    // Размещаем комнаты
    for (let i = 0; i < numRooms; i++) {
      const width = getRandomInt(this.rooms.minSize, this.rooms.maxSize); // случайная ширина комнаты
      const height = getRandomInt(this.rooms.minSize, this.rooms.maxSize); // случайная высота комнаты
      const row = getRandomInt(0, this.mapSize.h - height - 1); // случайная строка для размещения комнаты
      const col = getRandomInt(0, this.mapSize.w - width - 1); // случайный столбец для размещения комнаты
      rooms.push({ width, height, row, col });
      // Заполняем клетки внутри комнаты
      for (let j = row; j < row + height; j++) {
        for (let k = col; k < col + width; k++) {
          this.gameMap[j][k] = new Tile(k, j);
        }
      }
    }
    const _genVerticalPassage = (column) => {
      this.gameMap = this.gameMap.map((row, numRow) =>
        row.map((el, numColumn) =>
          numColumn === column ? new Tile(numColumn, numRow) : el
        )
      );
    };
    const _genHorizontalPassage = (row) => {
      this.gameMap = this.gameMap.map((el, numRow) =>
        numRow === row ? new Array(this.mapSize.w).fill(new Tile()) : el
      );
    };
    let cntVerticalPassages = getRandomInt(
      this.passages.min,
      this.passages.max
    );
    let cntHorizontalPassages = getRandomInt(
      this.passages.min,
      this.passages.max
    );

    // соединяем все комнаты между собой, чтобы не было недостижиымх зон
    rooms.forEach((room) => {
      const isVerticalPassages = getRandomInt(0, 1 + 1) === 0;
      if (isVerticalPassages) {
        const column = getRandomInt(room.col + 1, room.col + room.width - 1);
        _genVerticalPassage(column);
        cntVerticalPassages--;
      } else {
        const row = getRandomInt(room.row + 1, room.row + room.height - 1);
        _genHorizontalPassage(row);
        cntHorizontalPassages--;
      }
    });
    // если остались проходы, генерируем их
    for (let i = 0; i < cntVerticalPassages; i++) {
      const column = getRandomInt(0, this.mapSize.w);
      _genVerticalPassage(column);
    }
    for (let i = 0; i < cntHorizontalPassages; i++) {
      const row = getRandomInt(0, this.mapSize.h);
      _genHorizontalPassage(row);
    }
  }
  spawnEntity() {
    const emptyCells = this._getEmptyCells();
    shuffleArray(emptyCells);
    for (let i = 0; i < 10; i++) {
      const { x, y } = emptyCells.pop();
      this.gameMap[y][x] = new HPBoost(x, y, this.boostConfig.health);
    }
    // put atack boosts
    for (let i = 0; i < 2; i++) {
      const { x, y } = emptyCells.pop();
      this.gameMap[y][x] = new AtackBoost(x, y, this.boostConfig.attack);
    }
    // put enemys
    for (let i = 0; i < 10; i++) {
      const { x, y } = emptyCells.pop();
      const enemy = new Enemy(
        x,
        y,
        100,
        this.entityСonfig.enemyAttack,
        i,
        this.onMoveEnemy,
        this.onDespawnEnemy
      );
      this.gameMap[y][x] = enemy;
      this.enemys.push(enemy);
    }
    //put player
    const { x, y } = emptyCells.pop();
    this.player = new Player(
      x,
      y,
      100,
      this.entityСonfig.playerAttack,
      this.onMovePlayer
    );
    this.gameMap[y][x] = this.player;
  }
  onMovePlayer(newX, newY) {
    const { x, y } = this.player.pos;

    this.gameMap[y][x] = new Tile(x, y);
    this.gameMap[newY][newX] = this.player;
    // console.log(`old pos: ${x} ${y} new pos ${newX} ${newY}`);
  }
  omMoveEnemy(id, newX, newY) {
    const { x, y } = this.enemys[id].pos;
    this.gameMap[y][x] = new Tile(x, y);
    this.gameMap[newY][newX] = this.enemys[id];
  }
  onDespawnEnemy(id) {
    const { x, y } = this.enemys[id];
    this.gameMap[y][x] = new Tile(x, y);
    this.enemys = this.enemys.filter((enemy) => enemy.id !== id);
    this.enemys.forEach((enemy, id) => (enemy.id = id));
  }
  existCell(x, y) {
    return x >= 0 && x < this.mapSize.w && y >= 0 && y < this.mapSize.h;
  }
  _getEmptyCells() {
    const emptyCells = [];
    this.gameMap.forEach((row, y) =>
      row.forEach(
        (cell, x) => cell.cellType === "tile" && emptyCells.push({ x, y })
      )
    );
    return emptyCells;
  }

  getCell(x, y) {
    return this.gameMap[y][x];
  }
  getAroundEntity(x, y) {
    const aroundEntity = [];
    const possibleDiretions = [
      directions.DOWN,
      directions.UP,
      directions.RIGHT,
      directions.LEFT,
    ];

    possibleDiretions.forEach((direction) => {
      const newX = direction.x + x;
      const newY = direction.y + y;
      if (this.existCell(newX, newY)) {
        const cell = this.getCell(newX, newY);
        if (cell.type === "tileP" || cell.type === "tileE") {
          aroundEntity.push(cell);
        }
      }
    });

    return aroundEntity;
  }

  get map() {
    return this.gameMap;
  }
  get enemysCount() {
    return this.enemys.length;
  }
}

class Game {
  constructor(config, onEndGame) {
    this.map = new Map(
      config.mapSize,
      config.passages,
      config.rooms,
      config.boosts,
      config.entity
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

    document.addEventListener("keyup", this.keyUp);
    document.addEventListener("keydown", this.keyDown);
    this.gameLoopInterval = setInterval(this.gameLoop, this.gameSpeed);
  }
  movePlayer(direction) {
    const player = this.map.player;
    const newX = player.x + direction.x;
    const newY = player.y + direction.y;
    if (
      this.map.existCell(newX, newY) &&
      this.map.getCell(newX, newY).type !== "tileW" &&
      this.map.getCell(newX, newY).type !== "tileE"
    ) {
      if (this.map.getCell(newX, newY).type === "tileHP") {
        player.boostHealth(this.map.getCell(newX, newY).value);
        this.soundEngine.bounce();
      }
      if (this.map.getCell(newX, newY).type === "tileSW") {
        player.boostAttack(this.map.getCell(newX, newY).value);
        this.soundEngine.bounce();
      }
      player.move(newX, newY);
      if (this.playerAttack) {
        this.map.getAroundEntity(newX, newY).forEach((entity) => {
          if (entity.type === "tileE") {
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
    this.map.enemys.forEach((enemy, id) => {
      const direction = getRandomDirection();
      const newX = enemy.x + direction.x;
      const newY = enemy.y + direction.y;
      if (
        this.map.existCell(newX, newY) &&
        this.map.getCell(newX, newY).type === "tile"
      ) {
        enemy.move(newX, newY);
        this.map.getAroundEntity(newX, newY).forEach((entity) => {
          if (entity.type === "tileP") {
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
      case "w":
        this.playerDirection = directions.UP;
        break;
      case "s":
        this.playerDirection = directions.DOWN;
        break;
      case "a":
        this.playerDirection = directions.LEFT;
        break;
      case "d":
        this.playerDirection = directions.RIGHT;
        break;
      case " ":
        this.playerAttack = true;
    }
    console.log(this.playerDirection);
  }
  render() {
    const field = document.getElementById("field");
    // clear field
    field.textContent = "";
    this.map.map.forEach((row) => {
      const gameRow = document.createElement("div");
      gameRow.className = "row";
      row.forEach((el) => {
        const tile = document.createElement("div");
        tile.className = `tile ${el.cellType}`;
        if (el.type === "tileP" || el.type === "tileE") {
          // elemDiv.style.top = 25 * (el.y + 1);
          // elemDiv.style.left = 25 * (el.x + 1);
          tile.innerHTML = `<div class="health" style="width: ${el.health}%;"></div> `;
        }

        gameRow.appendChild(tile);
      });

      field.appendChild(gameRow);

      // update cooldown
      const coolDownEl = document.getElementById("cooldown");
      const perCoolDown =
        Math.round((this.map.player.coolDown * 0.2 * 100) / 1000) * 5;

      coolDownEl.className = `progress-radial progress-${perCoolDown}`;

      //update player health and attack
      const healthEl = document.getElementById("player-health");
      healthEl.innerText = this.map.player.health;
      const attackEl = document.getElementById("player-attack");
      attackEl.innerText = this.map.player._attack;
      attackEl.style.color = this.playerAttack ? "red" : "white";
    });
  }
}

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
    this.showModal("start");
    const startGameButton = document.getElementById("start-game");
    startGameButton.addEventListener("click", this.startGame);
    const nextGameButtons = document.getElementsByClassName(
      "modal-button-nextround"
    );

    for (let btn of nextGameButtons) {
      btn.addEventListener("click", this.nextRound);
    }
    const hardcoreSwitch = document.getElementById("hardcore");
    hardcoreSwitch.addEventListener("change", this.changeGameModeHandler);
  }
  changeGameModeHandler(value) {
    this.hardcore = value.currentTarget.checked;
  }
  nextRound() {
    this.showModal("start");
  }
  startGame() {
    this.closeModal();
    const config = this.hardcore ? hardcoreConfig : normalConfig;
    this.game = new Game(config, this.onEndGame);
    this.game.init();
  }

  onEndGame(win) {
    if (win) {
      this.showModal("win");
    } else {
      this.showModal("loss");
    }
  }

  showModal(modalName) {
    if (this.modal !== null) {
      this.closeModal();
    }
    this.modal = modalName;
    const modalDiv = document.getElementById(`modal-${modalName}`);
    modalDiv.style.display = "block";
  }
  closeModal() {
    const modalDiv = document.getElementById(`modal-${this.modal}`);
    modalDiv.style.display = "none";
  }
}
// const game = new Game();
// game.init();
const gameManager = new GameManager();
gameManager.init();

class SoundEngine {
  constructor() {
    this._music = new Howl({
      src: ["/sounds/music.wav"],
      loop: true,
      volume: 0.5,
      preload: false,
    });
    this._bounce = new Howl({
      src: ["/sounds/bounce.mp3"],
      preload: false,
    });
    this._shoot = new Howl({
      src: ["/sounds/shoot.wav"],
      preload: false,
    });
    this._explosion = new Howl({
      src: ["/sounds/explosion.wav"],
      preload: false,
    });
  }
  init() {
    this._music.load();
    this._bounce.load();
    this._shoot.load();
    this._explosion.load();
  }
  playMusic() {
    this._music.play();
  }
  stopMusic() {
    this._music.stop();
  }
  bounce() {
    this._bounce.play();
  }
  shot() {
    this._shoot.play();
  }
  explosion() {
    this._explosion.play();
  }
}
