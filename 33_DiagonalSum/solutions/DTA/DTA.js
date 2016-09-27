/* Created by David Adams March 1 2016 */
module.exports = function diagonalsSum(matrix) {
  if (matrix.length < 2) {
    if (matrix.length === 1) {
      return matrix[0] * 2;
    }
    return 0;
  }
  var innerDiagonal = 0;
  var outerDiagonal = matrix[0].length - 1;
  var matrixSum = 0;
  for (var i = 0; i < matrix.length; i++) {
    matrixSum += matrix[i][innerDiagonal] + matrix[i][outerDiagonal]
    innerDiagonal++;
    outerDiagonal--;
  }
  return matrixSum;
}