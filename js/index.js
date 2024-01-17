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
  constructor(cellType) {
    this.cellType = cellType;
  }
}
class Wall extends Cell {
  constructor() {
    super("tileW");
  }
}
class Tile extends Cell {
  constructor() {
    super("tile");
  }
}
class Player extends Cell {
  constructor() {
    super("tileP");
    // this.x = x;
    // this.y = y;
  }
  //   moveTo(x,y) {
  //     this.x=x
  //     this.y=y
  //   }
}
class Enemy extends Cell {
  constructor() {
    super("tileE");
  }
}
class HPBoost extends Cell {
  constructor() {
    super("tileHP");
  }
}

class AtackBoost extends Cell {
  constructor() {
    super("tileSW");
  }
}
class Game {
  constructor() {
    this.gameMap = [];
    this.player = { x: 0, y: 0 };
    this.movePlayer = this.movePlayer.bind(this);
    this.moveEnemys = this.moveEnemys.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.playerDirection = "0";
    this.enemys = [];
    // this.player = new Player()
  }
  init() {
    this.generateMap();
    this.initActors();
    this.render();
    document.addEventListener("keyup", this.keyUp);
    document.addEventListener("keydown", this.keyDown);
    setInterval(this.gameLoop, 1000 / 12);
  }
  gameLoop() {
    this.movePlayer();
    this.moveEnemys();
    this.render();
  }
  keyUp(e) {
    this.playerDirection = "0";
  }
  keyDown(e) {
    this.playerDirection = e.key;
  }
  moveEnemys() {
    console.log(this.enemys);
    const newEnemys = [];
    this.enemys.forEach((coords) => {
      let newCoords = { x: 0, y: 0 };
      const direction = getRandomInt(0, 4);
      switch (direction) {
        case 0:
          newCoords = { x: coords.x, y: coords.y - 1 };
          break;
        case 1:
          newCoords = { x: coords.x, y: coords.y + 1 };
          break;
        case 2:
          newCoords = { x: coords.x - 1, y: coords.y };
          break;
        case 3:
          newCoords = { x: coords.x + 1, y: coords.y };
          break;
      }
      if (this.checkColl(newCoords.x, newCoords.y)) {
        this.gameMap[coords.y][coords.x] = new Tile();
        this.gameMap[newCoords.y][newCoords.x] = new Enemy();
        newEnemys.push(newCoords);
      } else {
        newEnemys.push(coords);
      }
      this.enemys = newEnemys;
    });
  }
  movePlayer() {
    console.log(this.playerDirection);
    let newCoords = { x: 0, y: 0 };
    switch (this.playerDirection) {
      case "w":
        newCoords = { x: this.player.x, y: this.player.y - 1 };
        break;
      case "s":
        newCoords = { x: this.player.x, y: this.player.y + 1 };
        break;
      case "a":
        newCoords = { x: this.player.x - 1, y: this.player.y };
        break;
      case "d":
        newCoords = { x: this.player.x + 1, y: this.player.y };
        break;
    }
    if (this.checkColl(newCoords.x, newCoords.y)) {
      this.gameMap[this.player.y][this.player.x] = new Tile();
      this.player = newCoords;
      this.gameMap[newCoords.y][newCoords.x] = new Player();
    }
  }
  checkColl(x, y) {
    if (x < 0 || x > config.mapSize.w - 1) return false;
    if (y < 0 || y > config.mapSize.h - 1) return false;
    return this.gameMap[y][x].cellType === "tile";
  }
  generateMap() {
    this.gameMap = Array.from(Array(config.mapSize.h), () =>
      new Array(config.mapSize.w).fill(new Wall())
    );

    const numRooms = getRandomInt(config.minRooms, config.maxRooms);

    // Размещаем комнаты
    for (let i = 0; i < numRooms; i++) {
      const width = getRandomInt(config.minRoomSize, config.maxRoomSize); // случайная ширина комнаты
      const height = getRandomInt(config.minRoomSize, config.maxRoomSize); // случайная высота комнаты
      const row = getRandomInt(0, config.mapSize.h - height - 1); // случайная строка для размещения комнаты
      const col = getRandomInt(0, config.mapSize.w - width - 1); // случайный столбец для размещения комнаты

      // Заполняем клетки внутри комнаты
      for (let j = row; j < row + height; j++) {
        for (let k = col; k < col + width; k++) {
          this.gameMap[j][k] = new Tile();
        }
      }
    }

    const cntVerticalPassages = getRandomInt(
      config.minPassages,
      config.maxPassages
    );
    const cntHorizontalPassages = getRandomInt(
      config.minPassages,
      config.maxPassages
    );

    for (let i = 0; i < cntVerticalPassages; i++) {
      const column = getRandomInt(0, config.mapSize.w);
      this.gameMap = this.gameMap.map((row) =>
        row.map((el, id) => (id === column ? new Tile() : el))
      );
    }
    for (let i = 0; i < cntHorizontalPassages; i++) {
      const numRow = getRandomInt(0, config.mapSize.h);
      this.gameMap = this.gameMap.map((el, id) =>
        id === numRow ? new Array(config.mapSize.w).fill(new Tile()) : el
      );
    }
    console.log(this.gameMap);
  }
  initActors() {
    const emptyCell = [];
    this.gameMap.forEach((row, y) =>
      row.forEach(
        (cell, x) => cell.cellType === "tile" && emptyCell.push({ x, y })
      )
    );
    shuffleArray(emptyCell);
    // put hp boosts
    for (let i = 0; i < 10; i++) {
      const { x, y } = emptyCell.pop();
      this.gameMap[y][x] = new HPBoost();
    }
    // put atack boosts
    for (let i = 0; i < 2; i++) {
      const { x, y } = emptyCell.pop();
      this.gameMap[y][x] = new AtackBoost();
    }
    // put enemy
    for (let i = 0; i < 10; i++) {
      const { x, y } = emptyCell.pop();
      this.gameMap[y][x] = new Enemy();
      this.enemys.push({ x, y });
    }
    //put player
    const { x, y } = emptyCell.pop();
    this.gameMap[y][x] = new Player();
    this.player = { x, y };
  }
  render() {
    // clear field
    const field = document.getElementById("field");
    // console.log(field);
    field.textContent = "";
    this.gameMap.map((row) => {
      const gameRow = document.createElement("div");
      gameRow.className = "row";
      row.map((el) => {
        const elemDiv = document.createElement("div");
        elemDiv.className = `tile ${el.cellType}`;
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
