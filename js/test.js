const rows = 20; // количество строк в массиве
const cols = 20; // количество столбцов в массиве
const minRooms = 5; // минимальное количество комнат
const maxRooms = 10; // максимальное количество комнат
const minSize = 3; // минимальный размер комнаты
const maxSize = 8; // максимальный размер комнаты

// Создаем двумерный массив
const arr = new Array(rows);
for (let i = 0; i < rows; i++) {
  arr[i] = new Array(cols).fill(0);
}

// Генерируем случайное количество комнат
const numRooms =
  Math.floor(Math.random() * (maxRooms - minRooms + 1)) + minRooms;

// Размещаем комнаты
for (let i = 0; i < numRooms; i++) {
  const width = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize; // случайная ширина комнаты
  const height = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize; // случайная высота комнаты
  const row = Math.floor(Math.random() * (rows - height)); // случайная строка для размещения комнаты
  const col = Math.floor(Math.random() * (cols - width)); // случайный столбец для размещения комнаты

  // Заполняем клетки внутри комнаты значением 1
  for (let j = row; j < row + height; j++) {
    for (let k = col; k < col + width; k++) {
      arr[j][k] = 1;
    }
  }
}

// Выводим результат в консоль
console.log(arr);
