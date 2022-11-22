
// improved way to handle function parameters
// it allows to represent an indefinite number of parameters as an array

    // ************ Problem in ES5************

    // function sum(a,b){
    //     console.log(a+b)
    // }
    // sum(1+2+3+4+5+6);


//************but now using ES6 using Rest Parameters************
// function sum(...inputs){
//     console.log(...inputs);
//     console.log(inputs);
//     let total=0;
//     for (let i of inputs){
//         total +=i;
//     }
//     console.log(total)
// }
// sum(1,2,3,4,5,6,7)
    

function fun(a,b,...inputs){
    console.log(a+" " +b)
    console.log(...inputs);
    console.log(inputs);
    console.log(inputs.length);
    console.log(inputs[0]);
    console.log();
    
}
fun("Afshan","Ariba","Asad","Rabia","Zuman","Zaman", "Fahad")
