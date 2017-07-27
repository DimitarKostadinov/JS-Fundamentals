function solve(arr) {
    let symbol = 'b';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === symbol) {
            return i;
        }
    }
    console.log('Not Found!');
}

console.log(solve(['a', 'a', 'b']));