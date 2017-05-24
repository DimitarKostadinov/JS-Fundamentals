function volume(r,h) {
    let volume=((1/3)*Math.PI*r*r*h);
    console.log(volume);

    let s=Math.sqrt(r*r + h*h);
    let l=Math.PI*r*s;
    let b=Math.PI*(r*r);

    let area=l+b;
    console.log(area);
}
console.log(volume(3, 5));