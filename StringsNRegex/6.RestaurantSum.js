function solve(input) {
    // let item=input.filter((e,i)=>i%2==0);
    // let price=input.filter((e,i)=>i%2==1).map(Number).reduce((a,b)=>a+b);
    // console.log(`You purchased ${item.join(', ')} for a total sum of ${price}`);
    let items=input.filter((e,i)=>i%2==0);
    let sum=input.filter((e,i)=> i%2==1).map(Number).reduce((a,b)=>a+b);
    console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);
}
solve(['Cola','1.35', 'Pancakes', '2.88']);