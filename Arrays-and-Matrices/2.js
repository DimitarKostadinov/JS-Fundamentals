function solve(arr) {
    let result=[];
    for (let el in arr) {
        if(el % 2 ==0){
           result.push(arr[el]);
        }
    }
    return result.join(' ');
}
console.log(solve(['20', '30', '40']));