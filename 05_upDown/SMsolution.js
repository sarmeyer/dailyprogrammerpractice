function upDown(){
  var numbers = [4,5,2,8,7,9,5,8,4,4];
  var strings = [];
  for (var i = 0; i < numbers.length; i++) {
    if(numbers[i+1] > numbers[i]) {
      strings.push('up');
    } else if(numbers[i+1] < numbers[i]){
      strings.push('down');
    } else {
      strings.push('even');
    }
  }
  console.log(strings);
}
upDown();
