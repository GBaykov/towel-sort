
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let Arr = [];
 if(matrix == undefined || matrix == []) return [];
 for(let item = 0; item < matrix.length; item++) {
     if(item == 0 || item % 2 == 0) {
         for(let i = 0; i < matrix[item].length; i++) {
             Arr.push(matrix[item][i]);
          }
     } else {
         for(let i = matrix[item].length - 1; i >= 0; i--) {
             Arr.push(matrix[item][i]);
         }
     }
 }
 return Arr;
}
