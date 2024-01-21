export const directions = {
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: +1, y: 0 },
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  ZERO: { x: 0, y: 0 },
};

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const getRandomDirection = () => {
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
