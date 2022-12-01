# Important-Javascript-concepts-ES6

## Topics covered are mentioned as follows:

## 1.var, let and const keywords
  var is used in old JS while let and const are used in ES6
  	var has function scope
	let and const has  block scope 
	
## 2. break and continue keywords

The break key word is used when breaking the loop, for example:
	  
	```javascript
	let i =0;
	do{
	    console.log(i+1);
	    if(i ===5){
		break;
	    }
	    i++;
	}while(i<10);
	console.log('done!')
	
	//Expected output: 1 2 3 4 5 6 done!
	
	
	The continue key word is  used when breaking the block
	
	let j =0;
	do{
	    if(j ===5){
		j++;
		continue;
	    }
	    console.log(j+1);
	    j++;
	}while(j<10);
	console.log('done!')

	//Expected output: 1 2 3 4 5 7 8 9 10 done!```

## 3. Arrow Function:
  Arrow functions  has been introduced in ES6 version of Javascript, which allows cleaner way of  coding as compared to regular function.

	### Regular Function
	function greet(){
		return "Good Morning!"
	}
	console.log(greet())
	
	### Arrow function
	************ one liner code ************ 
	
	    const greet=()=>"Good Morning!"
	    console.log(greet())

	************ when returning value *********** 
	
	    const greet=()=>{
	         return "Good Morning!"
	     }
	     console.log(greet())

	************ can pass one parameter without using braces ************ 
	
		const greet=name=>"Good Morning "+name
		console.log(greet("Afshan"))

	************ but cannot pass more than one parameters without using braces ************ 
	
		const greet=(name, ending)=>"Good Morning "+name+" "+ending;
		console.log(greet("Afshan", "Bye"))

## 4. Lexical This in arrow function:
Arrow function pointouts/bind its parents 'this' rather than its own

		************  Example: ************ 
		let obj1 = {
			greeting:"Good Morning ",
			names: ["Afshan", "Rabia", "Samia", "Asad"],
			speak(){
			    let greeting ="morning"
			    this.names.forEach((student)=>{
				console.log(this.greeting+" Obedient "+ student);
			    });
			}
		    }

		    obj1.speak();

		    //Expected output: 
		    Good Morning obedient Afshan
		    Good Morning obedient Rabia
		    Good Morning obedient Samia
	    	    Good Morning obedient Asad

## 5. Default parameters:

		************ to solve below mentioned problem we are using defualt parameters ************ 

		    function sum(a,b){
			 console.log(a+b);
		    }
		    sum(4)

		    // Expected output: NaN

		************ defualt parameters ************ 

		    function sum(a,b=4){
			 console.log(a+b);
		     }
		    sum(4)

		     // Expected output: 8
	     
## 6. Rest parameter:
It is mproved way to handle function parameters. it allows to represent an indefinite number of parameters as an array.

		************ Problem in ES5************
		    function sum(a,b){
			 console.log(a+b)
		    }
		    sum(1+2+3+4+5+6);

		    // Expected output: NaN

			*********** *but now using ES6 using Rest Parameters ************
			function sum(...inputs){
			    console.log(...inputs);
			    console.log(inputs);
			    let total=0;
			    for (let i of inputs){
				total +=i;
			    }
			    console.log(total)
			}
			sum(1,2,3,4,5,6,7)
		    //Expected output:
		    1 2 3 4 5 6 7
		    (7) [1, 2, 3, 4, 5, 6, 7]
		    28
		
## 7. Spread operator:
It used in variable array where there is more than 1 values expected. Its syntax is same as Rest parameters but function is  totally opposite.
"Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element"

		************* Example:*************
		************************* concat() in ES5 ***********************

		     let arr1=[1,2,3];
		     let arr2=[4,5,6];
		     let arr3=[7,8,9];

		     arr1 = arr1.concat(arr2).concat(arr3)

		     console.log(arr1)
		
		// Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
		
		************************* Replace concat()***********************

		     let arr1=[1,2,3];
		     let arr2=[4,5,6];
		     let arr3=[7,8,9];

		     arr1 = [...arr1,...arr2,...arr3]

		     console.log(arr1)
		// Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
		
## 8. Events
## 9. Objects
## 10. ES6-Arrays:
An array is a collection of values of the same data type. It is a user-defined type.
	
		**************** Declaring array ****************

		**************** 1.frist way ****************

			let names = ["afshan","ariya","suman","saba","sheema"];

			var i;

			for(i=0; i<names.length; i++){
			    console.log(names[i])
			}

		**************** second way--> using new keyword ****************

			var arr = new Array(5);

			var j;
			for(j=0;j<=(arr.length)-1; j++){
			    arr[j]=j*5;
			    console.log(arr[j])
			}



		**************** Multi-dimensional array ****************

			var my_arr =[[1,2,3,4],[5,6,7,9],[1,4,8]];

			console.log(my_arr[2][1])

			var k;
			for(k=0;k<=(my_arr.length)-1; k++){
			    console.log(my_arr[k])
			}


		**************** passing array to function****************

			const studentNames =(names)=>{
			    var s;
			    for(s=0;s<=(names.length)-1; s++){
			    console.log(names[s])
			}
			}
			studentNames(names);

		**************** returning array from function****************

			function show() {   
			    return new Array("Blue", "Red", "Green", "Yellow")   
			 }  
			 show() 
			 var colors = show()   
			 for(var i in colors) {   
			    console.log(colors[i])     
			 } 
   Few Array methods:
   1.filter()
   2.map()
   3.find()
   4.forEach()
   5.some()
   6.reduce()
   7.includes()
 
## 11. Destructuring:
Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects. When destructuring an array, we use their positions (or index) in an assignment.

		**************** Array Destructuring **************** 
		Example:
		var fruits = ["banana", "mango", "apple", "grapes", "pineapple", "strawberry"];  

		// destructuring assignment  
		var[fruit1, fruit2, fruit3] = fruits;  

		console.log(fruit1); // banana  
		console.log(fruit2); // mango  
		console.log(fruit3); // apple
		
## 12. OOP in Javascript:
### Classes

	****************  Methods **************** 
	
		1.Constructor Method --> It is  automatically called once object of  class is  madeup
		2. Prototype Method --> we have to assign name  of method by ourselves and  it is only called by object of class
		3. Static Method --> we have to write static word before method name
		
		
		**************** Example:**************** 
		class student{

		    #gender;
		    
		**************** Methods ****************
		    
		    
		**************** 1. Constructor Method --> It is  automatically called once object of  class is  madeup
		
		    constructor(firstname,lastname,age, gender){
		    
			//properties
			this.name = firstname;
			this.caste= lastname;
			this.yourage= age;
			this.#gender=gender;
			console.log("Hello I am constructer function")
		    }
		
	    	**************** 2. Prototype Method --> we have to assign name  of method by ourselves and  it is only called by object of class
	    
		    hello(){
		    
			console.log(`Hello ${this.name} ${this.caste}. Your age is ${this.yourage} and your gender is ${this.#gender}`);
		    }

		
	    	**************** 3. Static Method --> we have to write static word before method name

		    static welocme(methodname){
		    
			console.log(`Hello welcome to ${methodname} Method`);
		    }

		}

	**************** Object in JS ****************
		
		let a = new student("Afshan", "Bhutto", 22, "Female");
		let b = new student("Areeb", "Haider", 9,"Male");
		a.hello();
		b.hello();

		student.welocme("Static");
	
	**************** Inheritence ****************
	
		class User extends student {   
			   show() {   
			      console.log("The name of the student is:  "+this.name)   
			   }   
			}   
			var obj = new User('Muneer');   
			obj.show()  

### Inheritence: 
An inheritance is the ability to create new entities from an existing one. The class that is extended for creating newer classes is referred to as superclass/parent class, while the newly created classes are called subclass/child class.
		

## 13. Callback Function:
As javascript is  event driven lang that is why instead of waititng for a  response before  moving on, Javascript will keep executing while listening other events.


		// this code will execute in such a way that output of  funB() is shown pirior to that of funA() but we  don't want this 


		const funA = ()=>{
		    setTimeout(function(){
			console.log("FunA")
		     }, 2000)
		}

		const funB = () =>{
		    console.log("FunB")
		}

		funA();
		funB();


Therefore now using callback function to resolve that issue
## A function that is being passed  as an argument is called callback function

		const funA = (name, callback)=>{
		     console.log(`Hello I am ${name}`);
		     callback()
		}

		const funB = () =>{
		     console.log("FunB")
		}

		 funA("FunA()", funB);
		 
		 
		 
		 ****************  Example 02. Fetching posts from server:**************** 

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
		
## 14. Callback Hell:
Callback Hell is essentially nested callbacks stacked on top of one another to form a pyramid structure. Every callback is dependent on/waits for the previous callback, resulting in a pyramid structure that affects the readability and maintainability of the code.

		****************  Example: **************** 
		// Task
		// task 1. getting roll number after 2s
		// task 2. provinding particular roll number and again getting its name and age after 2s
		// task 3. after 2s getting the gender of that rollnumber


		const getRollNumbers = () =>{

		    //1st task done
		    
		    setTimeout(()=>{
			console.log("Hey I am a 1st callback Function");

			let rollnumbers = [2,4,6,8,10,12,14,16,18,20]
			console.log(`Rollnumbers: ${rollnumbers}`);

			//2nd task done
			
			setTimeout((roll_num)=>{
			    const biodata ={
				name:"Afshan",
				age: 22,
				gender:"Female"
			    };
			    console.log("Hey I am a 2nd callback Function");
			    console.log(`Hey, my rollnumber is ${roll_num}.I am ${biodata.name} and I am ${biodata.age} years old!`);

			    // 3rd task
			    
			    setTimeout((name)=>{
				biodata.gender = "Female"
				console.log("Hey I am a 3rd callback Function");
				console.log(`Hey, my rollnumber is ${roll_num}. I am ${name} and I am ${biodata.age} years old, and my gender is ${biodata.gender}`);
			    },2000, biodata.name)

			}, 2000, rollnumbers[5])

		    }, 2000);
		}

		getRollNumbers()

## 15. Promise:
Promises are  objects which keeps track about whether certain event has already happened or not.These are used when callback hell is occurred.

There are 3 stages of promise
1.pending --> when promise has not started yet
2.resolve --> when promise is fullfilled, then we use .then()
3.reject -->  when promise is not fullfilled/rejected, then we use .catch()

		**************** Example : Fetching posts from server:**************** 

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
		
## 16. Async/Await in JS:
The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
		
		//simple Example


		let toppings_choice = () =>{
		    return new Promise( (resolve,reject)=>{
		         setTimeout( ()=>{
		             resolve(
		                 console.log("Which topping would you love? ")
		             )
		        }, 3000 )
		     } )
		 }

		async function kitchenF(){
		     console.log(" A ");
		     console.log(" B ");

		     await toppings_choice();

		     console.log(" C ");
		     console.log(" D ");
		     console.log(" E ");
		 }

		kitchenF()
		console.log("doing the dishes")
		console.log("cleaning the tables")
		console.log("taking other orders")
		
		
		
		/////// Expected Output:
		A 
		B 
		doing the dishes
		cleaning the tables
		taking other orders
		Which topping would you love? 
		C 
		D 
		E 
