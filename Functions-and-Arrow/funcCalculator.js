function solve(a,b,op) {


    let calc=function (a,b,op) {
        return op(a,b);
    };

    let add=function (a,b) {
        return a+b;
    };
    let sub=function (a,b) {
        return a-b;
    };
    let multiply=function (a,b) {
        return a*b;
    };
    let divide=function (a,b) {
        return a/b;
    };
    switch (op){
        case '+': return calc(a,b,add);
        case '-': return calc(a,b,sub);
        case '*': return calc(a,b,multiply);
        case '/': return calc(a,b,divide);
    }
}
console.log(solve(5, 3, '*'));