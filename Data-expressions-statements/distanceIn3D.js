function distance([x1,y1,z1,x2,y2,z2]) {
    let pointA={x:x1, y:y1, z:z1};
    let pointB={x:x2, y:y2, z:z2};
    let distanceX=Math.pow(pointA.x - pointB.x,2);
    let distanceY=Math.pow(pointA.y - pointB.y,2);
    let distanceZ=Math.pow(pointA.z - pointB.z,2);
    return Math.sqrt(distanceX+distanceY+distanceZ);
}
console.log(distance([1, 1, 0, 5, 4, 0]));