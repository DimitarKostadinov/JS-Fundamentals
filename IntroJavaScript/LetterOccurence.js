function countLetter(str,letter) {
    let counter=0;
    for(let i=0;i<str.length;i++)
        if(str[i]== letter)
            counter++;
    console.log(counter)

}
countLetter('panther','n')