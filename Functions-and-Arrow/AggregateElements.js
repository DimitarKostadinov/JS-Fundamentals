function solve(arr) {
function aggregate(elementi,startValue,op) {
    for (let e of elementi) {
        startValue=op(startValue,e);
    }
    return startValue;
}


    console.log(aggregate(arr, 0, (a, b)=>a + b));
    console.log(aggregate(arr, 0, (a, b)=>a + 1/b));
    console.log(aggregate(arr, '', (a, b)=>a + b));
}
solve([1, 2, 3]);