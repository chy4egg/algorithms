/**
 * (задача из книги)
 * Реализуйте алгоритм, определяющий, все ли символы в строке встречаются только один раз.
 * А если при этом запрещено использование дополнительных структур данных?
 *
 * 'abc' - false
 * 'aba' = true
 * 'bb' - true
 * 'a' - false
 *
 * Алгоритм:
 * Завести таблицу вхождений (чтобы сократить время выполнения)
 * 1) Итерация по строке
 * 2) Если символ есть в таблице, выходим из цикла, возвращаем false
 * 3) Если символа нет, пишем в таблицу и идем дальше
 * 4) Возвращаем hasDuplicates
 */

 const hasDuplicates = (string) => {
  if (string.length === 1) return false;

  let result = false;
  const stringTable = Object.create(null);

  for (let i = 0; i < string.length; i++) {
    if (stringTable[string[i]]) {
      result = true;
      break;
    } else {
      stringTable[string[i]] = true;
    }
  }

  return result;
 }

 const assert = (expression, result) => {
   console.log(expression === result);
 };

 assert(hasDuplicates('abc'), false);
 assert(hasDuplicates('aba'), true);
 assert(hasDuplicates('bb'), true);
 assert(hasDuplicates('a'), false);