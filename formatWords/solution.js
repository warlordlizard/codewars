function formatWords(words) {
  var str = '';
  if (words == null) return str;
  for (var i = 0; i < words.length; i++) {
    if (words[i] == '') {
      continue;
    }
    str += words[i] + ', ';
  }
  str = str.slice(0, str.length - 2).replace(/,(?=[^,]*$)/, ' and');
  return str;
}