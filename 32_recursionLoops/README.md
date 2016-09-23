## Recursion

Recursion is a technique where a method calls itself. Recursion can be used to traverse data structures. Before calling itself, a recursion method checks for the base case, which is typically a condition what will cease the loop.

### Challenge

Use recursion to solve [Fizz buzz](https://en.wikipedia.org/wiki/Fizz_buzz)!
/3 Fizz
/5 buzz
/3 and /5 fizz buzz

### Recursion Example

```js
var list = [1,2,3,4];
addOne(list) // returns [2,3,4,5];

function addOne(array) {
  for (var i = 0; i < array.length; i++) {
    array[i]++
  }
  return array
}

function addOne(array) {
  function recursion(array, index) {
    console.log(index);
    // base case
    if (array.length == index) {
      return array
    }
    array[index]++
    return recursion(array, index + 1)
  }
  array = recursion(array, 0)
  return array
}
```
