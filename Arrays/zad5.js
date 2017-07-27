function solve(matrix) {
    let maxSum=0;
    let maxRow=0;
    for (let row = 0; row < matrix.length; row++) {
        let rowSum=0;
        for (let col = 0; col < matrix[row].length; col++) {
            rowSum+=matrix[row][col];
        }
        if (rowSum>maxSum){
            maxSum=rowSum;
            maxRow=row;
        }

    }
    console.log(maxRow);

}
solve([[1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7],
    [8, 7, 6, 8, 9]]);