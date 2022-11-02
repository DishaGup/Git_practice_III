 ## Checking a prime number 
function Pcheck(number){
 let count==0
for(let i=1;i<=num;i++){
if(num%i==0){
count++}}
if(count==2){
return true}
return false}

let check=Pcheck(13)
if(check==true){
console.log("prime")}else{
console.log("No")}
