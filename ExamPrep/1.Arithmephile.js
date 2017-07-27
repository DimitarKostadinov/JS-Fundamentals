function solve(input) {
  let max=-Infinity;
  while(input.length>0){
      let counter=Number(input.shift());
      if(counter>=0 && counter<10){
          let product=1;
          for (let i = 0; i < counter; i++) {
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
    ]
);