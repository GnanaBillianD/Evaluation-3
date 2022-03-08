class Address{
    constructor(name1,city){
        this.name1= name1;
        this.city= city;
    }
        class1(){
            console.log("name: "+this.name1 + ", city: " + this.city)
    }
}

let detail= new Address("billian","tirunelveli")
detail.class1();




//static method
class Student {
    constructor(name2,mark){
        this.name2 = name2;
        this.mark = mark;
    }
    static staticMethod(name2, mark){
        console.log(`name: ${name2},mark: ${mark}`)
    }
}
let detail1 = new Student("billian",999)
Student.staticMethod("beni",1000)



//The static keyword defines static methods for classes.

//Static methods are called directly on the class (Student from the example above) - without creating an instance/object (detail1) of the class.
//send parameter 