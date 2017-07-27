function solve(wall) {
    wall=wall.map(Number);
    let isCompleted=false;
    let log=[];
    while(!isCompleted) {
        let concrete=0;
        isCompleted=true;
        for (let i = 0; i < wall.length; i++) {
            if(wall[i]<30){
                wall[i]++;
                concrete+=195;
                isCompleted=false;
            }
        }
        if(!isCompleted){
            log.push(concrete);
        }
    }

    console.log(log.join(', '));
    console.log(log.reduce((a,b)=>a+b,0)*1900 + ' pesos');

}
solve(['21','25','28']);