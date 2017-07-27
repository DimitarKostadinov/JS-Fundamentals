function solve(text) {
    let result=[];
    let startIndex=text.indexOf('(');
    while(startIndex>-1){
        let endIndex=text.indexOf(')',startIndex);
        if(endIndex==-1){
            break;
        }
        let snippet=text.substring(startIndex+1,endIndex);
        result.push(snippet);
        startIndex=text.indexOf('(',endIndex+1);
    }
    console.log(result.join(', '));

}