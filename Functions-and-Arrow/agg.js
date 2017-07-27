function agg(arr){
    function aggregate(elements,startValue,func){
        for(let element of elements){
            startValue=func(startValue,element)
        }
        return startValue;
    }

    console.log(aggregate(arr, 0, (a, b)=> a + b));
    console.log(aggregate(arr, 0, (a, b)=> a + 1/b));
    console.log(aggregate(arr, '', (a, b)=> a + b));
}
agg([1,2,8]);
