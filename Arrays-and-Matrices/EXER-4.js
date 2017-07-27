function solve(arr) {
    let rotations=arr.pop()%arr.length;
    for (let i = 0; i < rotations; i++) {
        let current=arr[arr.length-1];
        arr.pop();
        arr.unshift(current);
    }
    console.log(arr.join(' '));
}
solve(['1','2','3','4','2']);