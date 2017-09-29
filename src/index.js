module.exports = function multiply(first, second) {
  // your solution
  var arrFirst = first.split('');
  var arrFirstReverse = arrFirst.reverse();
  console.log(arrFirstReverse);
  var arrSecond = second.split('');
  var arrSecondReverse = arrSecond.reverse();
  console.log(arrSecondReverse);
  var product = [];

  for (var i = 0; i <= arrFirstReverse.length - 1; i++) {
    for (var j = 0; j <= arrSecondReverse.length - 1; j++) {
      var index = i + j;
      if (index < product.length) {
        product[index] = arrFirstReverse[i] * arrSecondReverse[j] + product[index];
      } else {
        product[index] = arrFirstReverse[i] * arrSecondReverse[j] + 0;
      }
      if (product[index] > 9) {
        if (index + 1 < product.length) {
          product[index + 1] = Math.floor(product[index] / 10) + product[index + 1];
          product[index] -= Math.floor(product[index] / 10) * 10;
        } else {
          product[index + 1] = Math.floor(product[index] / 10) + 0;
          product[index] -= Math.floor(product[index] / 10) * 10;
        }
      }
    }
  }
  product = product.reverse();
  product = product.join('');
  return product;
}
