function solve(email) {
    let regex = /^[a-zA-z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    let result=regex.test(email);
    if (result) {
        console.log('Valid');
    }else{
        console.log('Invalid');
    }
}
solve(['valid@email1.bg'])