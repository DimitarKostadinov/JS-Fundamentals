function solve(matrix) {
    let mainSum=0;
    let secondSum=0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum+=matrix[row][row];
        secondSum+=matrix[row][matrix.length-row-1];

    }
    console.log(mainSum + ' ' +secondSum);
}
solve([[20, 40], [10, 60]]);