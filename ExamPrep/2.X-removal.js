function solve(input) {
    let matrix=input.map(row=>row.split(''));
    let checkMatrix=input.map(row=>row.toLowerCase().split(''));

    for (let row = 0; row < checkMatrix.length-2; row++) {
        for (let col = 0; col < checkMatrix[row].length-2; col++) {
        let char=checkMatrix[row][col];
        if(checkMatrix[row][col+2]== char &&
            checkMatrix[row+1][col+1]== char &&
            checkMatrix[row+2][col]== char &&
            checkMatrix[row+2][col+2]== char){


            matrix[row][col]=''
            matrix[row][col+2]=''
            matrix[row+1][col+1]=''
            matrix[row+2][col]=''
            matrix[row+2][col+2]=''
        }


        }
        
    }
    for (let line of matrix) {
        console.log(line.join(''))
    }

}
solve([ 'abnbjs', 'xoBab', 'Abmbh', 'aabab', 'ababvvvv'])