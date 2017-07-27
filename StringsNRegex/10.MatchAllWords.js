function match(str) {
    if(Array.isArray(str)) str=str[0];
    let words=str.match(/(\w+)/g);
    return words.join('|')
}
console.log(match("Hello, how are you?"));