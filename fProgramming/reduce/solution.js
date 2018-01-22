function find_average(array) {
  var reducer = (acc, cur) => acc + cur;
  var result = array.reduce(reducer) / array.length
  return result;
}