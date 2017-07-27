function solve(matrix) {
    let mainDiagonal=[];
    let secondDiagonal=[];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(row===col){
                mainDiagonal.push(matrix[row][col]);
            }
            if (row===matrix.length-col-1) {
                    secondDiagonal.push(matrix[row][col])
            }

        }

    }
    console.log(mainDiagonal.join(' '));

    console.log(secondDiagonal.join(' '));

}
solve([ [1, 2, 3,5],
        [3, -2, 5,6],
        [8, 7, 6,1],
        [1, 2, 3,9]]);