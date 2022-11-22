// //synchronous
// console.log("I")
// console.log("eat")
// console.log("Ice cream")
// console.log("with a")
// console.log("spoon")


// //Asynchronous
// console.log("I")
// console.log("eat")
// setTimeout(()=>{
//     console.log("Ice cream")    
// },2000)
// console.log("with a")
// console.log("spoon")


// Example:
// placing order for icecream and then calling production process to make  icecream and  then serve:

let stocks={
    fruits:["strawberry", "banana","mango","apple"],
    liquids:["water","ice"],
    container:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}




//callback Function
// const order=(fruit_name,call_production)=>{

//     setTimeout( ()=>{
//         console.log(`${stocks.fruits[0]} was selected`);

//         call_production()
//     } , 2000)
//     // console.log("Order has  been recieved, please call production process");
    
// }

// //callback hell
// const production =()=>{
//     setTimeout( ()=>{
//         console.log("Production process has  been started");
//         setTimeout( ()=>{
//             console.log("Fruit has been chopped");
//             setTimeout( ()=>{
//                 console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`);
//                 setTimeout( ()=>{
//                     console.log("machine was started");
//                     setTimeout( ()=>{
//                         console.log(`ice-cream was placed on ${stocks.container[0]}. `);
//                         setTimeout( ()=>{
//                             console.log(`${stocks.toppings[1]} was selected as toppings.`);
//                             setTimeout( ()=>{
//                                 console.log("serve the ice-cream")
//                             },2000 )
//                         },3000 )
//                     } ,2000)
//                 },1000 )
//             },1000 )
//         } ,2000)
//     }, 0000 )
    
// }
// order("",production)






// // Promise
// let if_shop_is_open = true;
// let placingOrder = ( work, time) => {
//     return new Promise( (resolve, reject)=>{
//         if(if_shop_is_open){
//             setTimeout( ()=>{
//                 resolve(work())
//             },time );
//         }else{
//             reject("Some error has occured")
//         }
//     } )
// }

// placingOrder( ()=>{console.log(`${stocks.fruits[2]} was selected`)},2000 )

// .then( ()=>{
//     return placingOrder( ()=>{
//         console.log("Production process has  been started")
//     },0000 )
// } )

// .then( ()=>{
//     return placingOrder( ()=>{
//         console.log("Fruit has been chopped")
//     },2000 )
// } )

// .then( ()=>{
//     return placingOrder( ()=>{
//         console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`)
//     },1000 )
// } )

// .then( ()=>{
//     return placingOrder( ()=>{
//         console.log("machine was started");
//     },1000 )
// } )

// .then( ()=>{
//     return placingOrder( ()=>{
//         console.log(`ice-cream was placed on ${stocks.container[0]}. `);
//     },2000 )
// } )

// .then( ()=>{
//     return placingOrder( ()=>{
//         console.log(`${stocks.toppings[1]} was selected as toppings.`);
//     },3000 )
// } )

// .then( ()=>{
//     return placingOrder( ()=>{
//         console.log("serve the ice-cream")
//     },2000 )
// } )

// .catch( (error)=>{
//         console.log(error);
// } )

// .finally( ()=>{
//     console.log("shop has been closed now.")
// } )




// Async/Await

//simple Example


// let toppings_choice = () =>{
//     return new Promise( (resolve,reject)=>{
//         setTimeout( ()=>{
//             resolve(
//                 console.log("Which topping would you love? ")
//             )
//         }, 3000 )
//     } )
// }

// async function kitchenF(){
//     console.log(" A ");
//     console.log(" B ");

//     await toppings_choice();

//     console.log(" C ");
//     console.log(" D ");
//     console.log(" E ");
// }

// kitchenF()
// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking other orders")


// continuing ice-cream example::


let is_shop_open = true;

let time =(milliseconds) =>{
    return new Promise( (resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve, milliseconds)
        }else{
            reject(console.log("something went on wrong"))
        }
    } )
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.fruits[2]} was selected`)

        await time(0000);
        console.log("Production has been started");

        await time(2000)
        console.log("Fruit has been chopped")

        await time(1000)
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`)

        await time(1000)
        console.log("machine was started")

        await time(2000)
        console.log(`ice-cream was placed on ${stocks.container[0]}. `)

        await time(3000)
        console.log(`${stocks.toppings[1]} was selected as toppings.`)

        await time(2000)
        console.log("serve the ice-cream")
    }catch(error){
        console.log("Customer left!", error)
    }finally{
        console.log("The shop has been closed now.")
    }
}

kitchen();