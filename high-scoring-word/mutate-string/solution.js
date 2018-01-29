function mutateMyStrings(stringOne, stringTwo) {
  var arr1 = stringOne.split('');
  var arr2 = stringTwo.split('');
  var result = [arr1.join('')];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      arr1[i] = arr2[i];
      result.push(arr1.join(''));
    }
  }
  return result.join('\n') + '\n';
}