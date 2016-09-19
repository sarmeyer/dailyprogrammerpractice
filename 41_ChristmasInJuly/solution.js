var fs = require("fs");

fs.readFile('strings.txt', function(err, data) {
  if (err) {
    return console.error(err);
  }
  sortStrings(data.toString());
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
        console.log(nice);
      }
    }
  }
}




// It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.


// It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
// It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou. √
