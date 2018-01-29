function high(x) {
  var words = x.split(' ');
  var arr = words;
  arr = arr.map(word => {
    var score = 0;
    for (var i = 0; i < word.length; i++) score += word.charCodeAt(i) - 96;
    return score;
  });

  var highScore = 0;
  var hsIndex = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] > highScore) {
      highScore = arr[j]; hsIndex = j; 
    }
  }
  return words[hsIndex];
}