function cooking(arr) {
    let[number,op1,op2,op3,op4,op5]=[Number(arr[0]),arr[1],arr[2],arr[3],arr[4],arr[5]];
    let chop=(num)=>num/2;
    let dice=(num)=>Math.sqrt(num);
    let spice=(num)=>++num;
    let bake=(num)=>num*3;
    let fillet=(num)=>num-=num*0.2;
    for (let op of [op1,op2,op3,op4,op5]) {
        switch (op){
            case 'chop':
                number=chop(number);
                break;
            case 'dice':
                number=dice(number);
                break;
            case 'spice':
                number=spice(number);
                break;
            case 'bake':
                number=bake(number);
                break;
            case 'fillet':
                number=fillet(number);
                break;

        }
        console.log(number);
    }
}
cooking([32, 'chop', 'chop', 'chop', 'chop', 'chop'])