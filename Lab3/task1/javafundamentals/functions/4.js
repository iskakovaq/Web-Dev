let x=prompt("Enter an number:",0);
let n=prompt("Enter it's power:",0);

function pow(x,n){
    let power=x;
    for(let i = 1; i <= n; i++){
        power*=x;
    }
    return power;
}
if(n<1){
    alert("Please enter positive n:");
}
else{
    alert(pow(x,n));
}