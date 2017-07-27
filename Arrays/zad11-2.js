function solve(matrix) {
    let max=Number.MIN_VALUE;
    let min=Number.MAX_VALUE;
    let maxElement=0;
    let minElement=0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
                maxElement=matrix[row][col];
                if(maxElement>max){
                    max=maxElement;
                }
                minElement=matrix[row][col];
                if(minElement<min){
                    min=minElement;
                }
        }
    }
    console.log(min);
    console.log(max)

}
solve([ [1, 2, 3,4],
    [3, -2, 5,5],
    [8, 7, 6,15]]);