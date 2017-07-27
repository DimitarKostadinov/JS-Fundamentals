function exam(input){
    let i,currentLine,examPoints,exam,bonuses,grade,output="",counter=0,
        targetedCourse=input[input.length-1].trim(),
        sumGrade=0;
    for (let i = 0; i < input.length-1; i++) {
        currentLine=input[i].split(/\s+/).filter(function (e) {return e;});
        if(currentLine[1]===targetedCourse){
            counter++;
            sumGrade+=parseInt(currentLine[2]);
        }
        examPoints=parseInt(currentLine[2]);
        if(examPoints<100){
            output += currentLine[0] + ' failed at "' + currentLine[1] + '"\n';
        }
        exam=examPoints*0.2;
        bonuses=parseFloat(currentLine[3]);
        grade=(((exam+bonuses)/80)*4)+2;
        if(grade>6.00){
            grade=6.00;
        }
    }
}