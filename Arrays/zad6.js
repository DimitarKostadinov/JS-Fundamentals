function solve(matrix) {
    let mainDiagonal=[];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(row==col){
                mainDiagonal.push(matrix[row][col]);
            }

        }

    }

    console.log(mainDiagonal.join(' '));

}
solve([['a','b', 'c'],
        ['b', 'a', 'c'],
        ['a', 'c', 'a',]]);