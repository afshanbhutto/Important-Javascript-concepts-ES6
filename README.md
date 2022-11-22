# Important-Javascript-concepts-ES6

## Topics covered are mentioned as follows:

## 1.var, let and const
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
