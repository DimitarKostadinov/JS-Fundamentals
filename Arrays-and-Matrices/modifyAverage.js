function solve(num) {
   let numAsStr=num.toString();
    let result=sumDigit(numAsStr);
    while(result/numAsStr.length<=5){
        numAsStr+='9';
        result=sumDigit(numAsStr);
    }
    console.log(numAsStr)
    function sumDigit(numAsStr) {
        let sum=0;
        for (let el of numAsStr) {
            sum+=Number(el);
        }
        return sum;
    }
}
solve('101');


