function vat(input) {
    let sum=0;
    for(let num of input){
        sum+=num;
    }
    console.log("sum=" + sum);
    console.log("VAT=" +sum*0.20);
    console.log("Total=" + sum * 1.20);
}
vat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);