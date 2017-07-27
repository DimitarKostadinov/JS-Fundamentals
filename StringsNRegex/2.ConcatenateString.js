function solve(arr) {
   let strArr=arr.join('');
   let array=Array.from(strArr);
   let revArray=array.reverse;

    let revStr=revArray.join('');
    console.log(revStr);

}
solve(['I', 'am', 'student']);