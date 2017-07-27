function point(input) {
    //let x=input[0];
    //lex y=input[1];

    let [x,y,xMin,xMax,yMin,yMax]=input;
    if(x>=xMin && x<=xMax && y>=yMin && y<=yMax){
        console.log('inside');
    }else {
        console.log('outside');
    }
}
point([8,-1,2,12,-3,3]);