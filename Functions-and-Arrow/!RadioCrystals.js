function solve(num) {
    let targetSize=num[0];
    let opStr='Cut';
    for (let i = 1; i < num.length; i++) {
        let microns=num[i];
        console.log(`Processing chunk ${microns} microns`);
        microns=executeOperation(microns,'Cut',cut);
        microns=executeOperation(microns,'Lap',lap);
        microns=executeOperation(microns,'Grind',grind);
        microns=executeOperation(microns,'Etch',etch);

        if(microns+1===targetSize){
            microns=xRay(microns);
        }
    }
    function cut(crystal) {
        crystal=crystal/4;
        return crystal
    }
    function lap(crystal) {
        crystal-=crystal*0.2;
        return crystal
    }
    function grind(crystal) {
        crystal=crystal-20;
        return crystal
    }
    function etch(crystal) {
        crystal=crystal-2;
        return crystal;
    }
    function xRay(crystal) {
        return ++crystal;
    }
    function transportAndWash(crystal) {
        console.log('Transport and washing');
        return Math.floor(crystal)
    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function executeOperation(microns,opStr,op) {
        let newSize=op(microns);
        let counter=0;
        while(newSize>=targetSize||Math.floor(targetSize-newSize)===1){
            microns=newSize;
            newSize=op(microns);
            counter++;
        }
        if(counter>0){
            console.log(`${opStr} x${counter}`);
            microns=transportAndWash(microns);
        }
        return microns;
    }
}