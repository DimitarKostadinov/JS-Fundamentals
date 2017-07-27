function triangle(n) {

    for(let i=1;i<=n;i++)
    {
        let line="";
        for(let j=1;j<=n;j++)
        {
            if(j<=i){
            line+="$";}

        }
        console.log(line);
    }



}
triangle(3);