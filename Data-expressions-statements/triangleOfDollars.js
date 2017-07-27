function triangleOfDollars(y) {
    let stairs='';
    for(let i=0;i< y;i++){
        for(let j=2;j<=i;j--){
            stairs+='$';
        }
        console.log(stairs);
    }




    //for(let n="$";n.length<=y;n+="$"){
    //    console.log(n)
    //}
}
triangleOfDollars(4);