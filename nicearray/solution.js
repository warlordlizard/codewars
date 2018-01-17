function isNice(arr) {
  var nice;
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) { counter++ }
  }
  if (counter === arr.length && counter !== 0) { nice = true }
  else { nice = false }
  return nice;
}