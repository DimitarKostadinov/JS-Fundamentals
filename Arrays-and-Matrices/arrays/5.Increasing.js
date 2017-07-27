function solve(arr) {
    let result=[];
    arr=arr.map(Number);
    let biggest=Number(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>=biggest) {
            biggest=arr[i];
            result.push(biggest);
        }
    }
    console.log(result.join(`\n`));
}
solve(['1','3','5','2','9']);