function solve(arr) {
    arr=arr.map(Number);
   let sortedArray=arr.sort(function (a,b) {
        return a-b
    });
    console.log(sortedArray);


}
solve([0, 1, 0, 1, 0, 1])