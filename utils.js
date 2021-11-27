module.exports = {
    matrixProduct: function (mat1, mat2) {
        let result = [];
        for (let i = 0; i < mat1.length; i++) {
            result[i] = [];
            for (let j = 0; j < mat2[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < mat1[0].length; k++) {
                    sum += mat1[i][k] * mat2[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    },

    sumOfMatrices: function (mat1, mat2) {
        let result = [[], []];
        for (let i = 0; i <= mat1.length - 1; i++) {
            for (let j = 0; j <= mat1[i].length - 1; j++) {
                result[i][j] = mat1[i][j] + mat2[i][j];
            }
        }
        return result;
    },

    sumOfArray: function (array) {
        let sum = 0;
        for (let i = 0; i <= array.length - 1; i++) {
            sum += array[i];
        }
        return sum;
    },

    sumOfEachRow: function (matrix) {
        let result = [];
        let sumOfRow;
        for (let i = 0; i <= matrix.length - 1; i++) {
            sumOfRow = this.sumOfArray(matrix[i]);
            result.push(sumOfRow);
        }
        return result;
    }
}