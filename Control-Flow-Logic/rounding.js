function rounding([n,round]) {
    let number=Number(n);
    let r=(Number(round) > 15) ? '15': Number(round);

    console.log(Number(number.toFixed(r)));


}
rounding(['3.1415926535897932384626433832795', '2']);