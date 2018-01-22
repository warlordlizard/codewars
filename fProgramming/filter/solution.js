function isNumber(obj) {
  return obj !== undefined && typeof (obj) === 'number' && !isNaN(obj);
}
function filter_list(l) {


  return l.filter(isNumber);
}