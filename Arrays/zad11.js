let arr = [[9,2,3],[4,5,6],[7,8,15]];
let flattenedArr = arr.reduce(function(arr1, arr2) {  return arr1.concat(arr2)});

let sorted = flattenedArr.sort(function (a,b) {
    return a-b;
});
let min = sorted[0];
let max = sorted[sorted.length - 1];
console.log(min);
console.log(max);