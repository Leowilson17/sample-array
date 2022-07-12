var a = [];
var inputNUmbers;
var howManyNumbers = parseInt(prompt("Enter Total Number: "));
for (var k = 0; k < howManyNumbers; k++) {
    inputNUmbers = parseInt(prompt());
    a.push(inputNUmbers);
}
console.log(a);
var show = 0;
var pass = 0;
for ( i = 0; i < a.length;i++){
for ( j = 0; j < a.length;j++){
if(a[i] > a[j]){  
   show = a[i];
   if(show > pass){
   pass = show;
   }
}
}
} 
console.log(pass);