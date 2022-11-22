// Class in JS

class student{

    #gender;
    // Methods
    // 1. Constructor Method --> It is  automatically called once object of  class is  madeup
    constructor(firstname,lastname,age, gender){
        //properties
        this.name = firstname;
        this.caste= lastname;
        this.yourage= age;
        this.#gender=gender;
        console.log("Hello I am constructer function")
    }

    // 2. Prototype Method --> we have to assign name  of method by ourselves and  it is only called by object of class
    hello(){
        console.log(`Hello ${this.name} ${this.caste}. Your age is ${this.yourage} and your gender is ${this.#gender}`);
        // document.write(`Hello ${this.name} ${this.caste}. Your age is ${this.yourage}`)
    }

    // 3. Static Method --> we have to write static word before method name

    static welocme(methodname){
        console.log(`Hello welcome to ${methodname} Method`);
    }
    
}


// Object in JS
let a = new student("Afshan", "Bhutto", 22, "Female");
let b = new student("Areeb", "Haider", 9,"Male");
a.hello();
b.hello();

student.welocme("Static");

//Globalor public varaibles
console.log(a.name)
console.log(b.name)
console.log(a.caste)
console.log(b.caste)
console.log(a.yourage)
console.log(b.yourage)

// private varaibles --> can not be accessed out side of class
// console.log(a.#gender);