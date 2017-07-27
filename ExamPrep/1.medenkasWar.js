function solve(input) {
    let vitrokDealtDamage=0;
    let nasrokDealtDamage=0;

    let vitkorConsecutiveAttack=0;
    let naskorConsecutiveAttack=0;

    let vitkorPreviousDamage=Number.NEGATIVE_INFINITY;
    let naskorPreviousDamage=Number.NEGATIVE_INFINITY;

    for (let i = 0; i < input.length; i++) {
            let currentLine=input[i].split(" ");
            let medenkaType=currentLine[1];
            let countOfMedenka=Number(currentLine[0]);
        if (medenkaType==='white') {
            let medenkaDamage=countOfMedenka*60;

            if(medenkaDamage==vitkorPreviousDamage)
            vitkorConsecutiveAttack++;
            else{
                    vitkorConsecutiveAttack=1;
            }
            if(vitkorConsecutiveAttack == 2){
                vitrokDealtDamage+=medenkaDamage*2.75;
                vitkorPreviousDamage=medenkaDamage*2.75;
                vitkorConsecutiveAttack=0;
            }else{
                vitrokDealtDamage+=medenkaDamage;
                vitkorPreviousDamage=medenkaDamage;

            }

        }else{
            let medenkaDamage=countOfMedenka*60;

            if(medenkaDamage==naskorPreviousDamage)
                naskorConsecutiveAttack++;
            else{
                naskorConsecutiveAttack=1;
            }
            if(naskorConsecutiveAttack == 5){
                nasrokDealtDamage+=medenkaDamage*4.5;
                naskorPreviousDamage=medenkaDamage*4.5;
                naskorConsecutiveAttack=1;
            }else{
                nasrokDealtDamage+=medenkaDamage;
                naskorPreviousDamage=medenkaDamage;

            }
        }
    }
    if(vitrokDealtDamage>nasrokDealtDamage){
        console.log("Winner - Vitkor");
        console.log("Damage - " + vitrokDealtDamage);
    }else{
        console.log("Winner - Naskor");
        console.log("Damage - " + nasrokDealtDamage);
    }
}
