function solve(arr) {
    let result=arr.sort(function (a,b) {
        return a.length - b.length ||
            a.localeCompare(b);
    });
    console.log(result.join(`\n`));
}
solve(['alpha',
    'beta',
    'gamma']);