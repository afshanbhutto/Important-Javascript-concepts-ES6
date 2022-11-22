//one liner code
    // const greet=()=>"Good Morning!"
    // console.log(greet())



// when returning value
    // const greet=()=>{
    //     return "Good Morning!"
    // }
    // console.log(greet())


// can pass one parameter without using braces
// const greet=name=>"Good Morning "+name
// console.log(greet("Afshan"))


// but cannot pass more than one parameters without using braces
const greet=(name, ending)=>"Good Morning "+name+" "+ending;
console.log(greet("Afshan", "Bye"))

