function extractWordsUpperCase(str){

    let strUpper=str.toUpperCase();
    function extractWords(){ return strUpper.split(/\W+/);}
    let words=extractWords();
    words=words.filter(w=>w!='');
    return words.join(', ')
}
console.log(extractWordsUpperCase('Hi, how are you?'));