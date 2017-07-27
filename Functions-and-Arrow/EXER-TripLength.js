function solve(input) {
let [x1,y1,x2,y2,x3,y3]=input.map(Number);
    let distanceBetweenTwoPoints=(x1,y1,x2,y2)=>Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
    let distance123=distanceBetweenTwoPoints(x1,y1,x2,y2)+distanceBetweenTwoPoints(x2,y2,x3,y3);
    let distance132=distanceBetweenTwoPoints(x1,y1,x3,y3)+distanceBetweenTwoPoints(x3,y3,x2,y2);
    let distance213=distanceBetweenTwoPoints(x1,y1,x2,y2)+distanceBetweenTwoPoints(x1,y1,x3,y3);
    let shortestPath=Math.min(distance123,distance132,distance213);
    if (shortestPath==distance123) {
        console.log(`1->2->3: ${shortestPath}`)
    }else if(shortestPath==distance132){
        console.log(`1->3->2: ${shortestPath}`)
    }else{
        console.log(`2->1->3: ${shortestPath}`)

    }
}
solve([-1, -2, 3.5, 0, 0, 2]);