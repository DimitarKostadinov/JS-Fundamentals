function solve(matrix){
    let evenRows=[];
    let sum=0;
    for (let row = 1; row < matrix.length; row+=2) {
        evenRows.push(matrix[row]);
        for (let col = 0; col < matrix[row].length; col++) {
            sum+=matrix[row][col];
        }

    }
    for (let row of evenRows) {
        let join=row.join(',');
        let reduced=row.reduce(function (a, b) {
            return a + b
        }, 0);
        console.log(`${join} sum = ${reduced}`);


    }
    console.log(`Обща сума: ${sum}`);


}
solve([ [11, 12, 13,14,15,16],
        [21, 22, 23,24,25,26],
        [31, 32, 33,34,35,36],
        [41, 42, 43,44,45,46],
        [51, 52, 53,54,55,56],
        [61, 62, 63,64,65,66],
])