export const constructArray = (func, timesParam) => {
  const times = typeof timesParam === 'function' ? timesParam() : Number(timesParam);
  const array = [];
  for (var i = 0; i < times; i++) {
    array.push(func());
  }
  return array;
}
