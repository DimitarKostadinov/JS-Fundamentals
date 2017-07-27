function solve(arr) {
    arr=arr.map(Number);
    let result=[];
    let biggestNumber=arr[0];
    for (let i = 1; i <=arr.length; i++) {
        if (arr[i]>=biggestNumber) {
            biggestNumber=arr[i]
            result.push(biggestNumber);
        }

    }
    console.log(result.join(`\n`));
}
solve(['2','3','4','1','12','5']);