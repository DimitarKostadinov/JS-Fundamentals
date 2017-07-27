function quad(a,b,c) {
    let dis=(Math.pow(b,2)-(4*a*c));
    var x1=(-b + Math.sqrt(dis))/(2*a);
    var x2=(-b - Math.sqrt(dis))/(2*a);
    if(dis<0){
        console.log("No");
    }else if(dis==0){
        console.log(x1);
    }else{
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    }
}
quad(5,2,1);