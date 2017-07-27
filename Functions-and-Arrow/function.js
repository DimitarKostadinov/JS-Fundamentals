function repeatIt(count,func){
    for(let i=1 ; i<=count;i++)
    func(i);
}
let start=function (i) {
    console.log("**".repeat(i))
};
repeatIt(3,start);
repeatIt(3,function (x) {

})