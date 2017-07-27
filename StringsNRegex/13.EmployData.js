function solve(input) {
    let regex =
        /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9-\w ]+)/;
    for (let elements of input) {
        let match = regex.exec(elements);
        if (match) {
            console.log(`Name: ${match[1]}\n` + `Position: ${match[3]}\n` + `Salary: ${match[2]} `);
        }
    }
}
solve(['Jeff - 1500 - Staff', 'George - 1000 - Team Leader']);