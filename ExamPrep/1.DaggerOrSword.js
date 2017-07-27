function solve(input) {
    console.log(`<table border="1">
<thead>
<tr><th colspan="3">Blades</th></tr>
<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>
</thead>
<tbody>`);
    input=input.map(Number).map(Math.floor);
    for (let blade of input) {
        if(blade<=10) continue;
        let type='dagger';
        let application='';
        if(blade>40){
            type='sword'
        }
        switch (blade%5){
            case 0:
                application='*rap-poker';
                break;
            case 1:
                application='blade';
                break;
            case 2:
                application='quite a blade';
                break;
            case 3:
                application='pants-scraper';
                break;
            case 4:
                application='frog-butcher';
                break;


        }
        console.log(`<tr><td>${blade}</td><td>${type}</td><td>${application}</td></tr>`);

    }
    console.log(`</tbody>
</table>`);
}