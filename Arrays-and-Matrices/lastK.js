function sumLastKNumbersSequence(n, k) {
 let seq = [1];


        for (let current = 1; current < n; current++) //[1,5]
             {


            let start = Math.max(0, current - k);

//1 do 3
            let end = current - 1;


            let sum = 0;
            for (let i = start; i <= end; i++) // ot 1 do 3
            {
                sum+=seq[i];
                console.log(sum);

            }

            seq[current] = sum;

        }


        console.log(seq.join(' '));



}
sumLastKNumbersSequence(6, 3);