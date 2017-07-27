function solve(arr) {
        let isNazuben=true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] < arr[i]) {
             isNazuben=true
        }else{
            isNazuben=false;
            break;
        }

    }

    console.log(isNazuben)
}
solve([3, 4, 5, 6, 7]);