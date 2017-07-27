function solve(input) {
    let yield=Number(input[0]);
    let days=0;
    let product=0;
    while(yield>=100){
        days++;
        product+=yield;
        yield-=10;
        product-=26;
    }
    product-=26;
    if(product<0){
        product=0;
    };
    console.log(days);
    console.log(product);

}
solve(['111']);