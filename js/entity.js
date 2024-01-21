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
export class Wall extends Cell {
  constructor(x, y) {
    super('tileW', x, y);
  }
}
export class Tile extends Cell {
  constructor(x, y) {
    super('tile', x, y);
  }
}

export class Player extends Entity {
  constructor(x, y, health, attack, moveHandler) {
    super('tileP', x, y, health, attack, moveHandler);

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
export class Enemy extends Entity {
  constructor(x, y, health, attack, id, moveHandler, onDespawn) {
    super('tileE', x, y, health, attack, moveHandler);
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
export class Boost extends Cell {
  constructor(cellType, x, y, boostValue) {
    super(cellType, x, y);
    this.boostValue = boostValue;
  }
  get value() {
    return this.boostValue;
  }
  // set()
}
export class HPBoost extends Boost {
  constructor(x, y, boostValue) {
    super('tileHP', x, y, boostValue);
  }
}

export class AtackBoost extends Boost {
  constructor(x, y, boostValue) {
    super('tileSW', x, y, boostValue);
  }
}
