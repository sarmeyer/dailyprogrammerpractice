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
    var matrix2 = matrix[0].map(function (col, i) {
      return matrix.map(function (row) {
        return row[i];
      })
    })
    return matrix2.map(function (a) {
      return a.reverse();
    });
  }
  console.log(rotate(matrix));