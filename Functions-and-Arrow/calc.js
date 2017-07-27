function calculate(a,b,op) {
   let cal=function (a,b,op) {
       return op(a,b); //=> add(a,b) или divide(a,b)
   }
    let add=function (a,b) {
        return a+b;
    }
    let subtract=function (a,b) {
        return a-b;
    }
    let multiply=function (a,b) {
        return a*b;
    }
    let divide=function (a,b) {
        return a/b;
    }
    switch (op){
        case '+': return cal(a,b,add);
        case '-': return cal(a,b,subtract);
        case '*': return cal(a,b,multiply);
        case '/': return cal(a,b,divide);
    }

}
console.log(calculate(5, 5, '/'));