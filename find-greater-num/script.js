var a = [];
var inputNUmbers;
var howManyNumbers = parseInt(prompt("Enter Total Number: "));
for (var k = 0; k < howManyNumbers; k++) {
    inputNUmbers = parseInt(prompt());
    a.push(inputNUmbers);
}
console.log(a);
for (var i = 0; i < a.length; i++) {
    //console.log(a[i]);
    for (var j = 0; j < a.length; j++) {
        if (a[i] > a[j]) {
            var store = a[i];
        }
    }
}
console.log(store);