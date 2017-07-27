function imperial(number) {
    let foot=number/12;
    let inches=number%12;
    let feet=0;
    let inch=0;
    if(foot>0) feet = foot;
    if(inches>0) inch = inches
    console.log(`${Math.floor(feet)}'-${Math.floor(inch)}"` )
}
imperial(11);