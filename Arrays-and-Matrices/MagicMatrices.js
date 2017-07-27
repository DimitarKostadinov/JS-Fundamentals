function solve(matrix) {
    let rowSum=[];
    let colSum=[];
    let isMagic=true;
    //row sum
    for (let row = 0; row < matrix.length; row++) {
        let currentSum=0;
        for (let col = 0; col < matrix[row].length; col++) {
                currentSum+=matrix[row][col];

        }
        rowSum.push(currentSum);
        if (row > 0) {
            if(rowSum[row-1] != rowSum[row]){
                isMagic=false;
                break;
            }
        }
    }




    //col sum
    for (let row = 0; row < matrix.length; row++) {
        let currentSum=0;
        for (let col = 0; col < matrix[row].length; col++) {
            currentSum+=matrix[col][row];

        }
        colSum.push(currentSum);
        if (row > 0) {
            if(colSum[row-1] != colSum[row]){
                isMagic=false;
                break;
            }
        }
    }
    return isMagic;

}
console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]


));