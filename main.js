const utils = require("./utils.js");

const product = utils.matrixProduct([[1, 2], [1, 2]], [[1, 2], [1, 2]]);
console.log(product);

const sum = utils.sumOfMatrices([[1, 2], [1, 2]], [[3, 4], [5, 6]]);
console.log(sum);

const rowSum = utils.sumOfEachRow([[1, 2, 3], [4, 5, 1]]);
console.log(rowSum);
