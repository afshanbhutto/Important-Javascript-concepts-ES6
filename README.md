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
