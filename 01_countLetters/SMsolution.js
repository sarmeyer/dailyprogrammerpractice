function countLetters(str) {
  var obj = {};
  var arr = str.replace(/\s+/g, '').toLowerCase().split('');

  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}

console.log(countLetters("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."));