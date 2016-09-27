  var matrix = [
    [44, 23],
    [21, 10],
    [9, 28]
  ];

  function dimensions(matrix) {
    var rows = matrix.length;
    var cols = matrix[0].length;
    var dimension = `${rows} x ${cols}`
    return dimension.toString();
  }
  dimensions(matrix);

  function rotate(matrix) {
    //var result1 = [[9, 21, 44],
    //  [28, 10, 23]];
    //# of cols become # of rows

  }
[[22, 1],
 [50, 64],
 [2, 23]]
```

### Matrices

```
var matrix1 = [[44, 23],
               [21, 10],
               [9, 28],
               [85, 16],
               [33, 18]];

var dimensions1 = "5x2";

var result1 = [[33, 85,9, 21, 44],
               [18, 16, 28, 10, 23]];

var newDimensions1 = "2x5";

var matrix2 = [[29,62,8], [12,60, 31], [99,79,12]];
var dimensions2 = "3x3";
var result2 = [[99, 12, 29], [79, 60, 62], [12, 31, 8]];
var newDimensions2 = "3x3";
```
