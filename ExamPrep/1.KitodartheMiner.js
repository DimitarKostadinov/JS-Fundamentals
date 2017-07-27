function solve(input) {
    let gold=0;
    let silver=0;
    let diamond=0;
    for (let line of input) {
        let token=line.split(' - ');

        let isValid=token[0].trim().split(" ")[0]==='mine';
        if(token.length == 2) {
            if (isValid) {
                let subToken = token[1].split(":");
                if (subToken.length == 2) {
                    let oreType = subToken[0].trim();
                    let quantity = Number(subToken[1].trim());
                    switch (oreType) {
                        case 'gold':
                            gold += quantity;
                            break;
                        case 'silver':
                            silver += quantity;
                            break;
                        case 'diamonds':
                            diamond += quantity;
                            break;
                    }
                }
            }
        }

    }
    console.log(`*Silver: ${silver}`);
    console.log(`*Gold: ${gold}`);
    console.log(`*Diamonds: ${diamond}`);

}
solve(['mine bobovdol - gold: 10',
'mine - diamonds: 5',
'mine colas - wood: 10',
'mine myMine - silver:  14',
'mine silver:14 - silver: 14'

])