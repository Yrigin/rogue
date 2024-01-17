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
  }
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
  }
  init() {
    this.generateMap();
    this.initActors();
    this.render();
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
    }
    //put player
    const { x, y } = emptyCell.pop();
    this.gameMap[y][x] = new Player();
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
  }
}
const game = new Game();
game.init();
