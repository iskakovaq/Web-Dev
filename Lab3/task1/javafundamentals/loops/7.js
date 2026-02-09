let n=prompt("Enter a number to find prime number in a range of 2 to n",0);

primes:
for(let i=2; i <= n ; i++){

    for(let j=2 ; j < i ; j++){
        if(i%j==0){
            continue primes;
        }
    }

    alert( i );
}