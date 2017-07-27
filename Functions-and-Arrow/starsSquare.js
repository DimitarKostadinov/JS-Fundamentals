function solve(n=5) {
    function printSquare(count) {
        console.log('*'.repeat(count))
    }
    for (let i = 1; i <=n; i++) {
        printSquare(n);

    }
}
solve();