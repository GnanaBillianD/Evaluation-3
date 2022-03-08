//Scope of "this" inside the Arrow function
"use strict"
let person = {
    names : "Billian",
    place : "Tirunelvel",
    detail : () => { console.log("I am " + this.names+ " from " + this.place)}
}
console.log(person);
person.detail();//undefined, because the arrow the function points the parent scope.
