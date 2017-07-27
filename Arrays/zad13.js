function solve(matrix) {
    "use strict";
   let sum=0;
   let count=0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
        sum+=matrix[i][j];
            count++;
        }
    }
    let rowSum = matrix.map(r => r.reduce((a, b) => a + b));
    let rowWholeSum=rowSum.reduce(function (a,b) {
        return a+b
    },0);

    //console.log(rowWholeSum);
    console.log(sum);
    console.log(sum/count);
}

solve([ [1, 2, 3],
        [3, 2, 5],
        [8, 7, 6],
        [1, 2, 3]]);