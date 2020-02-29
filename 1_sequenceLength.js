// задача из видео яндекса (простая)
// найти максимальную последовательность числа 1 в массиве нулей и единиц
// [1,0,0,0] - 1
// [0,0,1,1,1,0] - 3
// [0,1,1,1,1,1] - 5
// [0,0,0,0] - 0
// [] - 0

// Алгоритм:
/**
 * 1) идем по массиву
 * 2) если 0 - идем дальше
 * 3) если 1 - плюсуем current sequence и проверяем след.элемент
 * 4) если 1 - то же самое
 * 5) если 0 или кончился - max = current (если max больше current), current = 0
 * 6) не забыть чекнуть на пустой массив (узнать сначала возможен ли такой вариант)
 * 7) не забыть вернуть max
 * Сложность O(n) - линейная (один проход по массиву)
 */

// Реализация:
const sequenceLength = (arr) => {
  let current = 0
  let max = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      current += 1
      // last element check (tricky!)
      if (arr[i + 1] === undefined && current > max) {
        max = current;
      }
    } else {
      if (current > max) {
        max = current
      }
      current = 0
    }
  }

  return max
}

const assert = (expression, result) => {
  console.log(expression === result)
}

assert(sequenceLength([1, 0, 0, 0]), 1);
assert(sequenceLength([0, 0, 1, 1, 1, 0]), 3);
assert(sequenceLength([0, 1, 1, 1, 1, 1]), 5);
assert(sequenceLength([0, 0, 0]), 0);
assert(sequenceLength([1,1,1]), 3);