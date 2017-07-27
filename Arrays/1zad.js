function solve(arr) {
    let isPositive = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
         isPositive = false;
        }

    }
    console.log(isPositive);

}
solve([5,3,-2,1]);