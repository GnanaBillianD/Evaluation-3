for(var i = 0; i <10; i++) {
    setTimeout(function() {
    console.log(i);
    },500);
    }


//The for-loop only exits until the set condition breaks. It will exit once i = 10. Therefore, i equals 10 when the for loop exits.
//setTimeout function in JavaScript usually takes a callback function as an argument. 
//A callback function is a function that is executed after another function finishes running. 
//In this case, it will run after for loop finishes. 
//At this point, i is already 10 when the console.log([i]) is about to be executed. 
//Due to the closure of JavaScript, the console.log has access to the i =10 which is defined as an outer layer of the setTimeout. 
//Thus, when the console.log is executed, it logs 10 five times.