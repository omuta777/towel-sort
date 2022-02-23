
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (typeof matrix !== 'undefined') {
        let arr = [];
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        for (let i = 0; i < matrix.length; i++) {
          if (i === 0) {
          for (let j = 0; j < matrix[i].length; j++) {
            arr.push(matrix[i][j]);
          } 
        } else if (i === 1) {
          for (let j = 0; j < matrix[i].length; j++) {
            arr1.unshift(matrix[i][j]);
          } 
          } else if (i === 2) {
            for (let j = 0; j < matrix[i].length; j++) {
              arr2.push(matrix[i][j]);
            } 
          } else if (i === 3) {
            for (let j = 0; j < matrix[i].length; j++) {
              arr3.unshift(matrix[i][j]);
            } 
            }
        }
       if (matrix.length === 0) {
         return [];
       } else if (matrix.length === 1) {
        return arr;
      } else if (matrix.length === 2) {
        return arr.concat(arr1);
      } else if (matrix.length === 3) {
       return arr.concat(arr1, arr2);
      } else if (matrix.length === 4) {
        return arr.concat(arr1, arr2, arr3);
       } 
      } else {
        return [];
      }
}
