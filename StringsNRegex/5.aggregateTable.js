function solve(arr) {
    let result=[];
    let sum=0;
    for (let line of arr) {
        let townData=line.split('|');

        let townName=townData[1].trim();
        let income=Number(townData[2].trim());

        result.push(townName);
        sum+=income;
    }
    console.log(result.join(', ') + `\n` + sum);
}
solve(['|Sofia         |300',
'|Veliko Turnovo     |500']);