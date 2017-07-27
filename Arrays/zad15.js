function solve(matrix) {
    let rowSum=matrix.map(r=>r.reduce((a,b)=>a+b));
    let colSum=matrix.reduce((a,b)=>a.map((x,i)=>x+b[i]));

    let maxRowSum=rowSum.sort(function (a,b) {
        return a-b;
    });
    let maxColSum= colSum.sort(function (a,b) {
        return a-b;
    });

    maxRowSum=Number(maxRowSum[maxRowSum.length-1]);
    maxColSum=Number(maxColSum[maxColSum.length-1]);
    console.log(maxRowSum);
    console.log(maxColSum);
    if (maxRowSum>maxColSum) {
        console.log(`RowSum ${maxRowSum} > ColSum ${maxColSum}`);
    }else if(maxRowSum<maxColSum){
        console.log(`ColSum ${maxColSum} > RowSum ${maxRowSum}`);
    }else{
        console.log('Equal RowSum and ColSum');
    }

}

solve([ [1, 2, 3,5],
        [3, 2, 5,5],
        [8, 7, 6,5],
        [1, 2, 3,9]]);