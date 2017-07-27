function solve(arr) {
   arr=arr.sort(function (a,b) {
       return a-b
   });

    let count=1;
    let maxCount=1;
    let previousItem=arr[0];
    let popular=arr[0];

    for (let i =1; i < arr.length; i++) {
        if(arr[i] === previousItem){
            count++;
        }else {
            if (count>maxCount) {
                popular=arr[i-1];
                maxCount=count;
            }
            previousItem=arr[i];
            count=1;
        }

    }
    console.log(popular);
    console.log(maxCount);
}
solve([4, 1, 1, 4, 2, 3,4, 4, 1, 2, 4, 19, 3]);