const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const config = {
  mapSize: { w: 40, h: 24 },
  minPassages: 3, // минимальное количество проходов
  maxPassages: 5,
  minRooms: 5, // минимальное количество комнат
  maxRooms: 10, // максимальное количество комнат
  minRoomSize: 3, // минимальный размер комнаты
  maxRoomSize: 8, // максимальный размер комнаты
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
  constructor(cellType, x, y, health, attack) {
    super(cellType, x, y);
    this._health = health;
    this._attack = attack;
  }
  get attack() {
    return this._attack;
  }
  get health() {
    return this._health;
  }
  set attack(attack) {
    this.attack = attack;
  }
  set health(health) {
    this._health = health;
  }
  damage(value) {
    this._health -= value;
  }
  isAlive() {
    return this._health > 0;
  }
}

class Player extends Entity {
  constructor(x, y, health, attack) {
    super("tileP", x, y, health, attack);
  }
}
class Enemy extends Entity {
  constructor(x, y, health, attack) {
    super("tileE", x, y, health, attack);
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

const directions = {
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: +1, y: 0 },
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  ZERO: { x: 0, y: 0 },
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
class Map {
  constructor(mapSize, passages, rooms, actors) {
    this.mapSize = mapSize;
    this.passages = passages;
    this.rooms = rooms;
    this.actors = actors;

    this.gameMap = [];
    this.player = null;
    this.enemys = [];
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
        numRow === row ? new Array(config.mapSize.w).fill(new Tile()) : el
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
  spawnEnity() {
    const emptyCells = this._getEmptyCells();
    shuffleArray(emptyCells);
    for (let i = 0; i < 10; i++) {
      const { x, y } = emptyCells.pop();
      this.gameMap[y][x] = new HPBoost(x, y);
    }
    // put atack boosts
    for (let i = 0; i < 2; i++) {
      const { x, y } = emptyCells.pop();
      this.gameMap[y][x] = new AtackBoost(x, y);
    }
    // put enemys
    for (let i = 0; i < 10; i++) {
      const { x, y } = emptyCells.pop();
      const enemy = new Enemy(x, y, 100, 25);
      this.gameMap[y][x] = enemy;
      this.enemys.push(enemy);
    }
    //put player
    const { x, y } = emptyCells.pop();
    this.player = new Player(x, y, 100, 50);
    this.gameMap[y][x] = this.player;
  }
  movePlayer(newX, newY) {
    const { x, y } = this.player.pos;
    this.player.setPosition(newX, newY);
    this.gameMap[y][x] = new Tile(x, y);
    this.gameMap[newY][newX] = this.player;
    // console.log(`old pos: ${x} ${y} new pos ${newX} ${newY}`);
  }
  moveEnemy(id, newX, newY) {
    const { x, y } = this.enemys[id].pos;
    this.enemys[id].setPosition(newX, newY);
    this.gameMap[y][x] = new Tile(x, y);
    this.gameMap[newY][newX] = this.enemys[id];
  }
  cellInMap(x, y) {
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
  get map() {
    return this.gameMap;
  }

  getCell(x, y) {
    return this.gameMap[y][x];
  }
  getAroundEnity(x, y) {
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
      if (this.cellInMap(newX, newY)) {
        const cell = this.getCell(newX, newY);
        if (cell.type === "tileP" || cell.type === "tileE") {
          aroundEntity.push(cell);
        }
      }
    });

    return aroundEntity;
  }
}

class Game {
  constructor() {
    this.map = new Map(
      { w: 40, h: 24 },
      { min: 3, max: 5 },
      { min: 5, max: 10, minSize: 3, maxSize: 8 }
    );
    this.playerDirection = directions.ZERO;

    this.gameLoop = this.gameLoop.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.render = this.render.bind(this);
  }
  init() {
    this.map.generate();
    this.map.spawnEnity();

    this.render();

    document.addEventListener("keyup", this.keyUp);
    document.addEventListener("keydown", this.keyDown);
    setInterval(this.gameLoop, 200);
  }
  movePlayer(direction) {
    const player = this.map.player;
    const newX = player.x + direction.x;
    const newY = player.y + direction.y;
    if (
      this.map.cellInMap(newX, newY) &&
      this.map.getCell(newX, newY).type !== "tileW"
    ) {
      this.map.movePlayer(newX, newY);
      this.map.getAroundEnity(newX, newY).forEach((entity) => {
        if (entity.type === "tileE") {
          entity.damage(100);
        }
      });
    }
  }
  moveEnemys() {
    this.map.enemys.forEach((enemy, id) => {
      const direction = getRandomDirection();
      const newX = enemy.x + direction.x;
      const newY = enemy.y + direction.y;
      if (
        this.map.cellInMap(newX, newY) &&
        this.map.getCell(newX, newY).type === "tile"
      ) {
        this.map.moveEnemy(id, newX, newY);
        this.map.getAroundEnity(newX, newY).forEach((entity) => {
          if (entity.type === "tileP") {
            entity.damage(enemy.attack);
          }
        });
      }
    });
  }
  // enity
  gameLoop() {
    this.movePlayer(this.playerDirection);
    this.moveEnemys();
    // console.log(this.map.map);
    this.render();
  }
  keyUp() {
    this.playerDirection = directions.ZERO;
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
    }
    console.log(this.playerDirection);
  }
  render() {
    // clear field
    const field = document.getElementById("field");
    // console.log(field);
    field.textContent = "";
    this.map.map.forEach((row) => {
      const gameRow = document.createElement("div");
      gameRow.className = "row";
      row.forEach((el) => {
        const elemDiv = document.createElement("div");
        elemDiv.className = `tile ${el.cellType}`;
        if (el.type === "tileP" || el.type === "tileE") {
          elemDiv.innerHTML = `<div class="health" style="width: ${el.health}%;"></div> `;
        }

        // elemDiv.style.cssText =
        //   "position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;";
        gameRow.appendChild(elemDiv);
      });
      field.appendChild(gameRow);
    });
    // console.log(this.gameMap);
  }
}

const game = new Game();
game.init();

// class Game {
//   constructor() {
//     this.gameMap = [];
//     this.player = { x: 0, y: 0 };
//     this.movePlayer = this.movePlayer.bind(this);
//     this.moveEnemys = this.moveEnemys.bind(this);
//     this.gameLoop = this.gameLoop.bind(this);
//     this.keyDown = this.keyDown.bind(this);
//     this.keyUp = this.keyUp.bind(this);
//     this.playerDirection = "0";
//     this.enemys = [];
//     // this.player = new Player()
//   }
//   init() {
//     this.generateMap();
//     this.initActors();
//     this.render();
//     document.addEventListener("keyup", this.keyUp);
//     document.addEventListener("keydown", this.keyDown);
//     setInterval(this.gameLoop, 1000 / 12);
//   }
//   gameLoop() {
//     this.movePlayer();
//     this.moveEnemys();
//     this.render();
//   }
//   keyUp(e) {
//     this.playerDirection = "0";
//   }
//   keyDown(e) {
//     this.playerDirection = e.key;
//   }
//   moveEnemys() {
//     console.log(this.enemys);
//     const newEnemys = [];
//     this.enemys.forEach((coords) => {
//       let newCoords = { x: 0, y: 0 };
//       const direction = getRandomInt(0, 4);
//       switch (direction) {
//         case 0:
//           newCoords = { x: coords.x, y: coords.y - 1 };
//           break;
//         case 1:
//           newCoords = { x: coords.x, y: coords.y + 1 };
//           break;
//         case 2:
//           newCoords = { x: coords.x - 1, y: coords.y };
//           break;
//         case 3:
//           newCoords = { x: coords.x + 1, y: coords.y };
//           break;
//       }
//       if (this.checkColl(newCoords.x, newCoords.y)) {
//         this.gameMap[coords.y][coords.x] = new Tile();
//         this.gameMap[newCoords.y][newCoords.x] = new Enemy();
//         newEnemys.push(newCoords);
//       } else {
//         newEnemys.push(coords);
//       }
//       this.enemys = newEnemys;
//     });
//   }
//   movePlayer() {
//     console.log(this.playerDirection);
//     let newCoords = { x: 0, y: 0 };
//     switch (this.playerDirection) {
//       case "w":
//         newCoords = { x: this.player.x, y: this.player.y - 1 };
//         break;
//       case "s":
//         newCoords = { x: this.player.x, y: this.player.y + 1 };
//         break;
//       case "a":
//         newCoords = { x: this.player.x - 1, y: this.player.y };
//         break;
//       case "d":
//         newCoords = { x: this.player.x + 1, y: this.player.y };
//         break;
//     }
//     if (this.checkColl(newCoords.x, newCoords.y)) {
//       this.gameMap[this.player.y][this.player.x] = new Tile();
//       this.player = newCoords;
//       this.gameMap[newCoords.y][newCoords.x] = new Player();
//     }
//   }
//   checkColl(x, y) {
//     if (x < 0 || x > config.mapSize.w - 1) return false;
//     if (y < 0 || y > config.mapSize.h - 1) return false;
//     return this.gameMap[y][x].cellType === "tile";
//   }
//   generateMap() {
//     this.gameMap = Array.from(Array(config.mapSize.h), () =>
//       new Array(config.mapSize.w).fill(new Wall())
//     );

//     const numRooms = getRandomInt(config.minRooms, config.maxRooms);

//     // Размещаем комнаты
//     for (let i = 0; i < numRooms; i++) {
//       const width = getRandomInt(config.minRoomSize, config.maxRoomSize); // случайная ширина комнаты
//       const height = getRandomInt(config.minRoomSize, config.maxRoomSize); // случайная высота комнаты
//       const row = getRandomInt(0, config.mapSize.h - height - 1); // случайная строка для размещения комнаты
//       const col = getRandomInt(0, config.mapSize.w - width - 1); // случайный столбец для размещения комнаты

//       // Заполняем клетки внутри комнаты
//       for (let j = row; j < row + height; j++) {
//         for (let k = col; k < col + width; k++) {
//           this.gameMap[j][k] = new Tile();
//         }
//       }
//     }

//     const cntVerticalPassages = getRandomInt(
//       config.minPassages,
//       config.maxPassages
//     );
//     const cntHorizontalPassages = getRandomInt(
//       config.minPassages,
//       config.maxPassages
//     );

//     for (let i = 0; i < cntVerticalPassages; i++) {
//       const column = getRandomInt(0, config.mapSize.w);
//       this.gameMap = this.gameMap.map((row) =>
//         row.map((el, id) => (id === column ? new Tile() : el))
//       );
//     }
//     for (let i = 0; i < cntHorizontalPassages; i++) {
//       const numRow = getRandomInt(0, config.mapSize.h);
//       this.gameMap = this.gameMap.map((el, id) =>
//         id === numRow ? new Array(config.mapSize.w).fill(new Tile()) : el
//       );
//     }
//     console.log(this.gameMap);
//   }
//   initActors() {
//     const emptyCell = [];
//     this.gameMap.forEach((row, y) =>
//       row.forEach(
//         (cell, x) => cell.cellType === "tile" && emptyCell.push({ x, y })
//       )
//     );
//     shuffleArray(emptyCell);
//     // put hp boosts
//     for (let i = 0; i < 10; i++) {
//       const { x, y } = emptyCell.pop();
//       this.gameMap[y][x] = new HPBoost();
//     }
//     // put atack boosts
//     for (let i = 0; i < 2; i++) {
//       const { x, y } = emptyCell.pop();
//       this.gameMap[y][x] = new AtackBoost();
//     }
//     // put enemy
//     for (let i = 0; i < 10; i++) {
//       const { x, y } = emptyCell.pop();
//       this.gameMap[y][x] = new Enemy();
//       this.enemys.push({ x, y });
//     }
//     //put player
//     const { x, y } = emptyCell.pop();
//     this.gameMap[y][x] = new Player();
//     this.player = { x, y };
//   }
//   render() {
//     // clear field
//     const field = document.getElementById("field");
//     // console.log(field);
//     field.textContent = "";
//     this.gameMap.map((row) => {
//       const gameRow = document.createElement("div");
//       gameRow.className = "row";
//       row.map((el) => {
//         const elemDiv = document.createElement("div");
//         elemDiv.className = `tile ${el.cellType}`;
//         // elemDiv.style.cssText =
//         //   "position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;";
//         gameRow.appendChild(elemDiv);
//       });
//       field.appendChild(gameRow);
//     });
//     // console.log(this.gameMap);
//   }
// }
// const game = new Game();
// game.init();
