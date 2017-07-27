function solve(matrix) {
    let rowSum=[];
    let colSum=[];
    let isMagic=true;
    //rowSum
    for (let row = 0; row < matrix.length; row++) {
            let currSum=0;
        for (let col = 0; col <matrix[row].length; col++) {
                currSum+=matrix[row][col];

        }
        rowSum.push(currSum);
        if (row>0) {
            if(rowSum[row-1]!= rowSum[row]){
                isMagic=false;
                break;
            }
        }
    }
    //colSum
    if(isMagic) {
        for (let row = 0; row < matrix.length; row++) {
            let currSum = 0;
            for (let col = 0; col < matrix.length; col++) {

                currSum += matrix[col][row]
            }
            colSum.push(currSum);
            if (row > 0) {
                if (colSum[row - 1] != colSum[row]) {
                    isMagic = false;
                    break
                }
            }
        }
    }
    return isMagic;

}
console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]

));