function solve(matrix) {
    let belowMainDiagonal=1;
    let aboveMainDiagonal=1;
    let belowSecondDiagonal=1;
    let aboveSecondDiagonal=1;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            //Below Main Diagonal
            if(row>col) {
                belowMainDiagonal *= matrix[row][col]
            }
            //Above main Diagonal
            if(col>row){
                aboveMainDiagonal *=matrix[row][col];
            }

        }
    }
    //aboveSecondDiagonal
    for (let row = 0; row <matrix.length; row++) {
        for (let col = 0; col < matrix[row].length-row-1; col++) {
            aboveSecondDiagonal*=matrix[row][col];
        }

    }
    //belowSecondDiagonal
    for (let row = 0; row <matrix.length; row++) {
        for (let col = matrix.length-row; col < matrix[row].length; col++) {
            belowSecondDiagonal*=matrix[row][col];
        }

    }
    // for (i=0; i <<N; i++) for (j=0;j<< N-i-1;j++) abovesecondarysum += A[i][j];
    //
    // for (i=0; i <<N; i++) for (j=N-i;j<< N;j++) belowsecondarysum += A[i][j];


    console.log(aboveMainDiagonal);
    console.log(belowMainDiagonal);
    console.log(aboveSecondDiagonal);
    console.log(belowSecondDiagonal);

}
solve([ [1, 2, 3],
        [3, 4, 5],
        [8, 7, 6]]);