class ThisKeyword {
    constructor(name, age) {
        this.name = name,
            this.age = age,
            this.func= () => console.log("hello! welcome to class")
    }
    method() {
        console.log(`My name is ${this.name}. My age is ${this.age}`)
    }

}

let person = new ThisKeyword ("billian","27");
person.method();
person.func();