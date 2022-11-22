// As javascript is  event driven lang that is why instead of waititng for a  response before  moving on, Javascript
// will keep executing while listening other events.


// this code will execute in such a way that output of  funB() is shown pirior to that of funA() but we  don'1 want this 


// const funA = ()=>{
//     setTimeout(function(){
//         console.log("FunA")
//     }, 2000)
// }

// const funB = () =>{
//     console.log("FunB")
// }

// funA();
// funB();


// Therefore now using callback function to resolve that issue
// A function that is being passed  as an argument is called callback function

// const funA = (name, callback)=>{
//     console.log(`Hello I am ${name}`);
//     callback()
// }

// const funB = () =>{
//     console.log("FunB")
// }

// funA("FunA()", funB);



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

let createPosts = (post, callback)=>{
    setTimeout(()=>{
        posts.push(post)
        callback();
    }, 2000)
}

getPosts()
createPosts({title:"Post three", body:"This is post three"}, getPosts)
