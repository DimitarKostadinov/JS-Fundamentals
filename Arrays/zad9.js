function solve(matrix) {
    let bestRow=0;
    let bestCol=0;
    let bestSum=Number.MIN_VALUE;
    for (let row = 0; row < matrix.length-1; row++) {
        for (let col = 0; col < matrix[0].length-1; col++) {
            let sum= matrix[row][col]+ matrix[row][col+1] + matrix[row+1][col] + matrix[row+1][col+1];
            if(sum>bestSum){
                bestSum=sum;
                bestRow=row;
                bestCol=col;
            }

        }

    }
    console.log(`Best platform is
    ${matrix[bestRow][bestCol]} ${matrix[bestRow][bestCol+1]}
    ${matrix[bestRow+1][bestCol]} ${matrix[bestRow+1][bestCol+1]}`)
    console.log(bestSum);
}
solve([ [1, 2, 3,4],
    [3, 4, 5,5],
    [8, 7, 6,6]]);