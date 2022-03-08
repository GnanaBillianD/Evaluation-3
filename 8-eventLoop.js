//call stack
let value1 = 5;
let value2 = 10;
function callStack(value1, value2){
   return value1 * value2;
}
let result = callStack(value1, value2);
console.log(result);



 //Event Loop
 console.log('hi');

setTimeout(function() {
     console.log('eventloop')
},5000);

console.log('JS')