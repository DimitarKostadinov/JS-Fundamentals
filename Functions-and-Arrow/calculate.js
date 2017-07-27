function calculate(x1,x2,op) {
    let calc=function (x1,x2,op){ return op(x1,x2)};
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
    switch(op){
        case '+': return calc(x1,x2,add);
        case '-': return calc(x1,x2,subtract);
        case '*': return calc(x1,x2,multiply);
        case '/': return calc(x1,x2,divide);

    }

}
console.log(calculate(2, 4, '/'));