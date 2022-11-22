// // promises are  objects which keeps track about whter certain event has already happened or not.
// // ther are used when callback hell is occurred

// // There are 3 stages of promise
// // 1.pending
// // 2.resolve
// // 3.reject

// // Example:

// // Task
// // task 1. getting roll number after 2s
// // task 2. provinding particular roll number and again getting its name and age after 2s
// // task 3. after 2s getting the gender of that rollnumber


// // there are two ways to declare/use promise:
// // 1. promise as  an object

// // an executer function is called
// // promise created/produce
// // task 1.
// const promsie1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let student_rollno = [2,4,6,8,10,12,14,16,18,20];
//         resolve(student_rollno);
//         // reject('Error while loading')
//     },2000)
// });

// // task 2.
// // 2. by returning promise from a  function
// const getBiodata= (indexdata)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout((indexdata)=>{
//             const biodata ={
//                 name:"Afshan",
//                 age: 22,
//                 gender:"female"
//             }
//             resolve(`Hey, my rollnumber is ${indexdata}.I am ${biodata.name} and I am ${biodata.age} years old!`);
//         }, 2000, indexdata)
//     })
// }

// // task 3.
// // 2. by returning promise from a  function
// const getGender= (gender)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout((gender)=>{
//             resolve(`Hey, my rollnumber is ${indexdata}.I am ${biodata.name} and I am ${biodata.age} years old!. I am alpha ${biodata.gender}`);
//         }, 2000, biodata.gender)
//     })
// }


// //promise consume
// promsie1.then((rollno)=>{
//     console.log(rollno);
//     return getBiodata(rollno[1]);
// }).then((a)=>{
//     console.log(a);
//     return getGender(s);
// }).then((b)=>{
//     console.log(b)
// })
// .catch((error)=>{
//     console.log(error)
// })



// Example 02. Fetching posts from server:

let posts = [
    {title: "Post one", body:"This  is  post one"},
    {title: "Post two", body:"This  is  post two"}
]

let getPosts = ()=>{
    setTimeout(()=>{
        let output = ""
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML =output
    }, 1000)
}

function createPosts(post){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
                console.log(!error)
                  
            }else{
                reject("Error: Something went on wrong")
            }
        }, 2000);
    })
}

createPosts({title:"Post three", body:"This is post three"})
.then(getPosts)
.catch(err => console.log(err))