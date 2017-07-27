function solve(matrix) {
    let firstrow=matrix.map(r=>r.reduce((a,b)=>a+b));
    console.log(firstrow.slice(0, 2));;
}
solve([[1, 2, 3], [4, 5, 6] ,[7, 8, 9]]);