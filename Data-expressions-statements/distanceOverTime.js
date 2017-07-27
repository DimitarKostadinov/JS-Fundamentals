function distance([v1,v2,t]) {
    let dist1=Number(v1*(1000/3600));
    let dist2=Number(v2*(1000/3600));
    let delta=Number(Math.abs(dist1-dist2));
    let time=Number(t);
    let s=delta*time;
    console.log(s);


}
console.log(distance([11, 10, 120]));