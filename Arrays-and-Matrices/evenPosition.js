function solve(arr) {
    let res=[];
    for (let el in arr) {
        if(el%2==0){
            res.push(arr[el]);
        }
    }
    return res.join(' ');
}
console.log(solve(['20', '30', '40']));;