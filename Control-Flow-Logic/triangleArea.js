"use strict";
function area(a,b,c) {
    let s=(a+b+c)/2
    let area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}
console.log(area(2, 3.5, 4));