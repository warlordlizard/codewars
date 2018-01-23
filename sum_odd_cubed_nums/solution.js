function cubeOdd(arr) {
  for (var i = 0; i < arr.length; i++) if (typeof (arr[i]) !== 'number') return undefined;
  var result = arr.map(y => y * y * y);
  var filtered = result.filter(x => x % 2);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return filtered.reduce(reducer, 0);
}