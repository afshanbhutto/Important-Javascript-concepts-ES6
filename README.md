# Important-Javascript-concepts-ES6

## Topics covered are mentioned as follows:

## 1.var, let and const keywords
  var is used in old JS while let and const are used in ES6
  	var has function scope
	let and const has  block scope 
	
## 2. break and continue keywords

	The break key word is used when breaking the loop, for example:
	
	let i =0;
	do{
	    console.log(i+1);
	    if(i ===5){
		break;
	    }
	    i++;
	}while(i<10);
	console.log('done!')
	
	output: 1 2 3 4 5 6 done!
	
	
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

	output: 1 2 3 4 5 7 8 9 10 done!

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

##4. Lexical This in arrow function:
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

##5. Defualt parameters:

	************ to solve below mentioned problem we are using defualt parameters ************ 

	    function sum(a,b){
	         console.log(a+b);
	    }
	    sum(4)

	************ defualt parameters ************ 

	    function sum(a,b=4){
	         console.log(a+b);
	     }
	    sum(4)
	    
##6. Rest parameter:
It is mproved way to handle function parameters. it allows to represent an indefinite number of parameters as an array.

    	************ Problem in ES5************
	    function sum(a,b){
		 console.log(a+b)
	    }
	    sum(1+2+3+4+5+6);


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
		
##7. Spread operator:
It used in variable array where there is more than 1 values expected. Its syntax is same as Rest parameters but function is  totally opposite.
"Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element"

		************* Example:*************
		************************* concat() in ES5 ***********************

		     let arr1=[1,2,3];
		     let arr2=[4,5,6];
		     let arr3=[7,8,9];

		     arr1 = arr1.concat(arr2).concat(arr3)

		     console.log(arr1)

		************************* Replace concat()***********************

		     let arr1=[1,2,3];
		     let arr2=[4,5,6];
		     let arr3=[7,8,9];

		     arr1 = [...arr1,...arr2,...arr3]

		     console.log(arr1)

##8. Events
##9. Objects
##10. ES6-Arrays:
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
   
##11. OOP in Javascript:
	###.Classes
		### Methods
		1.Constructor Method --> It is  automatically called once object of  class is  madeup
		2. Prototype Method --> we have to assign name  of method by ourselves and  it is only called by object of class
		3. Static Method --> we have to write static word before method name
	### object
	
	Example:
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
