import { Player, Enemy, HPBoost, AtackBoost, Wall, Tile } from './entity';
import { getRandomInt, shuffleArray, directions } from './tools';
export class Map {
  constructor(mapSize, passages, rooms, boosts, entity) {
    this.mapSize = mapSize;
    this.passages = passages;
    this.rooms = rooms;
    (this.boostConfig = boosts), (this.entityСonfig = entity);

    this.gameMap = [];
    this.player = null;
    this.enemys = [];

    this.onMovePlayer = this.onMovePlayer.bind(this);
    this.onMoveEnemy = this.onMoveEnemy.bind(this);
    this.onDespawnEnemy = this.onDespawnEnemy.bind(this);
  }
  generate() {
    // заполняем все карту стенами
    this.gameMap = Array.from(Array(this.mapSize.h), () =>
      new Array(this.mapSize.w).fill(new Wall()),
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
          numColumn === column ? new Tile(numColumn, numRow) : el,
        ),
      );
    };
    const _genHorizontalPassage = (row) => {
      this.gameMap = this.gameMap.map((el, numRow) =>
        numRow === row ? new Array(this.mapSize.w).fill(new Tile()) : el,
      );
    };
    let cntVerticalPassages = getRandomInt(
      this.passages.min,
      this.passages.max,
    );
    let cntHorizontalPassages = getRandomInt(
      this.passages.min,
      this.passages.max,
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
        this.onDespawnEnemy,
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
      this.onMovePlayer,
    );
    this.gameMap[y][x] = this.player;
  }
  onMovePlayer(newX, newY) {
    const { x, y } = this.player.pos;

    this.gameMap[y][x] = new Tile(x, y);
    this.gameMap[newY][newX] = this.player;
    // console.log(`old pos: ${x} ${y} new pos ${newX} ${newY}`);
  }
  onMoveEnemy(id, newX, newY) {
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
        (cell, x) => cell.cellType === 'tile' && emptyCells.push({ x, y }),
      ),
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
        if (cell.type === 'tileP' || cell.type === 'tileE') {
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
