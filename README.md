# Evaluation- 3

### 1- "tihis" inside the Arrow function

#### Algorithm:

step 1: In this program, Create a one object with some properties and method.

step 2: And create arrow function in object inside property

step 3: Inside the arrow function, we assign "this" keyword for print that objects name and place.

step 4: But the arrow function don’t define their own context since it doesn’t have its own this context. They inherit that from the parent scope whenever you call this.

step 5: The next step, we will check the type of this is equal to window in arrow function, this condtion will be true. Because, In this case, given object parent scope is refer the global scope. 

#### Psudocode:
```
"use strict"
SET person = {
    names : "Billian",
    place : "Tirunelvel",
    detail : () => { PRINT ("I am " + this.names+ " from " + this.place)}
    global: () => { PRINT (this === window)}
}
PRINT person
person.detail()
```

### 2- Permutation:

#### Algorithm:

step 1: Get the input value as a string.

step 2: Inside the function I created an logic to find the permutaion.

step 3: Inside the function (permutation),, First the parameter string is converted to array by the split method().

step 4: And the next stap, the array index place will be changed.

step 5: Once the array value is modified,then the modified array will be printed immediatly.

#### Psudocode:
```
"use strict"
FUNCTION permutation(string) {
    SET length = string.length
    SET arr = string.split("")
    FOR (let j = 0; j < length; j++) {
        FOR (let i = 0; i < length - 1; i++) {
            SET temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            PRINT (arr.join(","))
        }
    }
}

permutation("ABC")
```

### 3- Callback functions are used event 

#### Algorithm:

tep 1: First create a call back function.

step 2: The call back function is passed as an argument to that Eventlistner

step 3: And document.addEventListener is used , and it takes two argumets.

step 4: first argument is must be an event, and the seconde argument is must be an callback function.

step 5: When the event is happened, at the time the event listener executes that parameter call back function.

step 6: In this case, the arrow function "this" will be print the global window. Becuase It refers to the scope where the function (the enclosing context) is present.

step 7: the regular function "this" will be always refers to the context of the function being called


#### Psudocode:
```
<!DOCTYPE html>
<html>
    <head></head>
<body>
<script>
SET arrowFunction= () =>{
    PRINT (this)
}

document.addEventListener("click", arrowFunction)


FUNCTION classicFunction(){
    PRINT (this)
}
    document.addEventListener("click", classicFunction)
})
</script>
</body>
</html>
```

### 4- If log the loop counter inside setTimeout, what will be logged?

#### Algorithm:

step 1: The for-loop only exits until the set condition breaks. It will exit once i = 10. Therefore, i equals 10 when the for loop exits.

step 2: setTimeout function in JavaScript usually takes a callback function as an argument. 

setp 3: A callback function is a function that is executed after another function finishes running. 

step 4: In this case, it will run after for loop finishes. 

step 5: At this point, i is already 10 when the PRINT [i]) is about to be executed. 

step 6: Due to the closure of JavaScript, the console.log has access to the i =10 which is defined as an outer layer of the setTimeout. 

step 7: Thus, when the PRINT is executed, it logs 10 five times.

#### Psudocode:
```
FOR(let i = 1; i < 10; i++) {
    setTimeout(FUNCTION () {
        PRINT i
    }, 1000;
}
```

### 5- Class And Static Method:

#### Algorithm:

step 1: first I create a class with some address detail.

step 2: Inside the Address constructor, the constructor takes the two parameter which is called name and city.

step 3: And the class have a method named class1().

step 4: And the constructor have an statement, to print the variable name and city.

step 5: Finlly, A variale will be created by the class with the help of new keyword.

step 6: Then we can access the property and method by the object name.

step 7: A class is an templet to create object.

step 8: Inside the class, we can declatre a method and property in privetly.

step 9: With the help of static keyword, we can create an private method and property.

step 10: And the object can't access that private property and method.

step 11: The pirivate property and method can be accessed by the class name.

#### Psudocode:
```
class Address{
    constructor(name1,city){
        this.name1= name1;
        this.city= city;
    }
        class1(){
            PRINT("name: "+this.name1 + ", city: " + this.city)
    }
}

SET detail= new Address("billian","tirunelveli")
detail.class1();

class Student {
    constructor(name2,mark){
        this.name2 = name2
        this.mark = mark
    }
    static staticMethod(name2, mark){
        PRINT(`name: ${name2},mark: ${mark}`)
    }
}
SET detail1 = new Student("billian",999)
Student.staticMethod("beni",1000)
```

### 6- How does “this” works inside the Class method?

#### Algorithm:

step 1: We would use this keyword inside the constructor in class.

step 2: With the help of the this keyword the variable will be assigned to an objects.

step 3: Using this keyword, we can declare a function inside the class, and the method can be accessed by the objects.

step 4: Inside the class the this keyword must be declared inside the constructor, then only the property and method will be accessed by the objects.

#### Psudocode:
```
class ThisKeyword {
    constructor(name, age) {
        this.name = name,
            this.age = age,
            this.func= () => PRINT ("hello! welcome to class")
    }
    method() {
        PRINT (`My name is ${this.name}. My age is ${this.age}`)
    }

}

SET person = new ThisKeyword ("billian","27");
person.method();
person.func();
```

### 7- ExecutionOrder

#### Algorithm:

step 1: First the ex() is called then the JavaScript interpreter goes into the function ex

step 2: And then it prints the ex function.

step 3: Now the setTime out executed.

step 4: While the setTimeout takes one second, The call stack executes the next statement(ex2()).

step 5: After setTimeout took one second, the callback function goes to callBack queue.

step 6: Then the statement (ex1()) is pushed to callstack, Finally the ex1 is executed.

#### Psudocode:
```
SET ex1 = () => console.log(ex1)
SET ex2 = () => console.log(ex2)
SET ex = () => {
    PRINT ex
    setTimeout(ex1, 1000)
    ex2()
}
ex()
```

### 8- Event loop:

#### i- Call stack

- Every Browser engine have an JavaScript engine. 

- The javascript engine contain the call stack in inside of JS.

- Every Javacript program is executed in inside the callstack. 

- An global execution context will create, while the program is ready for execute in inside of the call stack.

- Then only the program execution will be run line by line. 

- When the program is executed line by line, if the callstack see an function call, then the call stack create an another execution context for that function. 

- The function execution context is deleted, when that function execution will finish 

- Then the call stack executes the program in global execution context. 

- Once the program execution is finished, the global execution context is deleted. 

- This is how an call stacks works 

##### Example
```
SET value1 = 5
SET value2 = 10
FUNTION callStack(value1, value2){
   RETURN value1 * value2
}
SET result = callStack(value1, value2)
PRINT result
```

#### ii- Event loop:

-  The event loop simply checks the call stack, and if it is empty (which means there are no functions in the stack) it takes the oldest callback from the callback queue and pushes it into the call stack which eventually executes the callback.

- When the first line executes it’s a console.log(). This is a function invocation which means that this function is pushed into the call stack where it executes printing ‘hi’ to the console. Finally it’s returned and is popped off the stack.

-Then when the runtime goes to execute setTimeout() it knows that this is a web API. Therefore it gives it off to the browser to handle its execution. The browser starts the timer and then JS runtime pops the setTimeout() out of the stack. 

- It encounters another console.log() invocation and so it pushes this into the call stack, the message ‘JS’ is logged into the console, and then it’s finally returned. Then the last console.log() is popped off the stack. Now the call stack is empty.

- Meanwhile while all of this was going on the timer finishes. When 5 seconds have elapsed the browser goes ahead and pushes the callback function into the callback queue.

- Next the event loop checks if the call stack is free or not. Since it is free it takes the callback function and pushes it again back to the call stack which executes the code inside it.

- Again inside the code there is a console.log() invocation so this function goes to the top of the stack executes which logs "eventloop" into the console and finally it returns. This means it gets popped off the stack and finally the callback gets popped off the stack and we are done.

##### Example:
```
 PRINT ('hi')

setTimeout(function() {
     PRINT ('eventloop')
},5000)

PRINT ('JS')
```

### 9- Custom Event:

#### Example 1:

##### Algorithm:

step 1: In this program, create an event listener to change the button name using "click" event.

step 2: First write a html program. In this html program, we create two pragragph tag with some text and also create one button tag with name. 

step 3: Next create script tag for write a javascript code in inside of this tag.

step 4: Now declare the eventListner function in inside of script tag.

step 5: The next step inside the callback function, we get the dcoument from 'id' with help of 'getElementById'. we will assign this value. because when the event was happened by user, that time this value will be moved to 'id'.

step 6: Any click operation will happen in button, the eventListner callback function will execute.

##### Psudocode:
```
<!DOCTYPE html>
<html>

<head></head>

<body>
  <p>good morning</p>
  <p>Click anywhere in the document to perform a calculation.</p>
  <button id="demo">Subscribe</button>
  <script>
    document.addEventListener("click", () => {
      document.getElementById("demo").innerHTML = "Subscribed"
      })
  </script>
</body>
</html>
```

#### Example 2:

##### Algorithm:

step 1: In this program, create an custom event listener mouseover, click, mouseout.

step 2: First write a html program. In this html program, we create one button tag with name and ad also create one pragraph tag for 'id'. 

step 3: Next create script tag for write a javascript code in inside of this tag.

step 4: Declare a one variable for store the get element value from 'id'

step 5: then we declare the eventListner function for each event.

step 5: The next step create the callback function for each event, inside the callback function 'getElementById' keyword will be used for assign the value of changing element. Because when the event was happened by user, that time this value will be moved to allocate 'id' element.

step 6: Any click, moveover and mouseout operations will happen in button, the eventListner callback function will execute.

##### Psudocode:
```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript addEventListener()</h2>

<button id="myBtn">Try it</button>

<p id="demo"></p>

<script>
SET x = document.getElementById("myBtn")
x.addEventListener("mouseover", myFunction)
x.addEventListener("click", mySecondFunction)
x.addEventListener("mouseout", myThirdFunction)

FUNCTION myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>"
}

FUNCTION mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>"
}

FUNCTION myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>"
}
</script>

</body>
</html>
```

### 10- ‘super’ and ‘constructor’ keywords inside the Class:

#### Algorithm:

step 1: We can use super keyword inside the child class.

step 2: if you Declare a variable inside the child constructor, and the variable which is in the parent consructor, then our program will give the errror message.

step 3: to prevent this error message, the supper keyword should be used in child class constructor before the this keyword.

step 4: Then we can use the variable name whice is already in the parent constructor.

#### Psudocode:
```
class Detail {
    constructor(name, address) {
        this.name = name
        this.address = address
    }

    method() {
        RETURN `I am ${this.name}, I am living in  ${this.address}`
    }
}

class Person extends Detail {
    constructor(name, address, age) {
        super(name, address)  
        this.age = age
    }
    method() {
        PRINT (`${super.method()}, and My age is ${this.age}.`)
    }
}

SET person1 = new Person("Bilian", "Coimbatore", 21);

person1.method(); 
