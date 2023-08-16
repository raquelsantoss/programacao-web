// Exercicio 2
const matrix = [[1, 2], [3, 4], [5, 6]];
const transposedMatrix = matrixTransposition(matrix);
printMatrix(transposedMatrix);

function matrixTransposition(matrix) {
  const transposed = [];

  for (let i = 0; i < matrix[0].length; i++) {
    const column = [];
    for (let j = 0; j < matrix.length; j++) {
      column.push(matrix[j][i]);
    }
    transposed.push(column);
  }

  return transposed;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log("[ " + matrix[i].join(", ") + " ]");
  }
}

// Exercicio 3
const matrixX = [[1, 3], [2, 5]];
const matrixY = [[2, 2], [0, 1]];
const matrixResult = multiplyMatrix(matrixX, matrixY);
printMatrix(matrixResult);

function multiplyMatrix(matrix1, matrix2) {
  if (checkIfMatrixCanBeMultiplied(matrix1, matrix2)) {
    const product = [];

    for (let i = 0; i < matrix1.length; i++) {
      const row = [];
      for (let j = 0; j < matrix2[0].length; j++) {
        let result = 0;
        for (let k = 0; k < matrix1[i].length; k++) {
          result += matrix1[i][k] * matrix2[k][j];
        }
        row.push(result);
      }
      product.push(row);
    }

    return product;
  } else {
    console.log("Não é possível calcular!");
    return null;
  }
}

function checkIfMatrixCanBeMultiplied(matrix1, matrix2) {
  return matrix1[0].length === matrix2.length;
}
