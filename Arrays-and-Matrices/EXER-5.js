function solve(arr) {
    arr=arr.map(Number);
    let result=[];
    let biggest=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>=biggest) {
            biggest=arr[i];
            result.push(arr[i]);
        }

    }
    console.log(result.join(`\n`));
}
solve(['1','3','5','2','9']);