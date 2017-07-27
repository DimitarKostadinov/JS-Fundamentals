function solve(input) {
    let max=Number.NEGATIVE_INFINITY;
    while(input.length>0){
        let sequence=Number(input.shift());
        let product=1;
            if(sequence>=0 && sequence<10){
                for (let i = 0; i < sequence; i++){
                    product*=Number(input[i]);
                    if(product>max){
                        max=product;
                }

                }
            }


    }
    console.log(max);
}
solve(['10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'
])