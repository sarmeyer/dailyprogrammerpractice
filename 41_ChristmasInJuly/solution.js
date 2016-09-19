var fs = require("fs");

fs.readFile('strings.txt', function(err, data) {
  if (err) {
    return console.error(err);
  }
  sortStrings(data.toString());
  secondSort(data.toString());
});

function sortStrings(data) {
  var nice = [];
  var stringArray = data.replace(/\n/g, " ").split(" ");
  for (var i = 0; i < stringArray.length; i++) {
    var strings = stringArray[i].split();
    var letters = strings[0].split('');
    for (var j = 0; j < letters.length; j++) {
      var check = stringArray[i].match(/[aeiou]/gi);
      var special = stringArray[i].match(/x(?=y)|a(?=b)|c(?=d)|p(?=q)/g);
      if (!special && check && check.length >= 2 && letters[j] === letters[j + 1]) {
        nice.push(stringArray[i])
        nice.push(stringArray.indexOf(letters.join('')))
          // console.log(nice);
      }
    }
  }
}

function secondSort(data) {
  var nice2 = [];
  var stringArray = data.replace(/\n/g, " ").split(" ");
  for (var i = 0; i < stringArray.length; i++) {
    var strings = stringArray[i].split();
    var letters = strings[0].split('');
    for (var j = 0; j < letters.length; j++) {
      var pairs = stringArray[i].match(/(\w{2}).*?(\1)/gi);
      if (pairs && letters[j] === letters[j + 2]) {
        nice2.push(stringArray[i]);
        // console.log(nice2.length);
      }
    }
  }
}
