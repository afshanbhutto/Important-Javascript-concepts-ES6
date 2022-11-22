//Declaring array:
//1.frist way
let names = ["afshan","ariya","suman","saba","sheema"];

var i;

for(i=0; i<names.length; i++){
    console.log(names[i])
}

// second way--> using new keyword

var arr = new Array(5);

var j;
for(j=0;j<=(arr.length)-1; j++){
    arr[j]=j*5;
    console.log(arr[j])
}


// Multi-dimensional array:

var my_arr =[[1,2,3,4],[5,6,7,9],[1,4,8]];

console.log(my_arr[2][1])

var k;
for(k=0;k<=(my_arr.length)-1; k++){
    console.log(my_arr[k])
}


// passing array to function


const studentNames =(names)=>{
    var s;
    for(s=0;s<=(names.length)-1; s++){
    console.log(names[s])
}
}
studentNames(names);

// returning array from function
function show() {   
    return new Array("Blue", "Red", "Green", "Yellow")   
 }  
 show() 
 var colors = show()   
 for(var i in colors) {   
    console.log(colors[i])     
 } 
 
 // Array methods:

 const items = [
    {name:"bike", price:200},
    {name:"car", price:5000},
    {name:"cycle", price:100},
    {name:"ricket", price:50},
    {name:"bat", price:70},
    {name:"ball", price:30},
    {name:"shoes", price:1000},
    {name:"bag", price:600},
 ];


 //1. filter()
 const filteredItem=items.filter((item)=>{
    return item.price<=200
 })

 console.log(items)
 console.log(filteredItem)

//2. map()
const mapedItems=items.map((item)=>{
    return item.name
 })

 console.log(mapedItems)

 //3. map()
const foundItems=items.find((item)=>{
    return item.name === "bat"
 })

 console.log(foundItems)

  //4. forEach()
items.forEach((item)=>{
    console.log(item.price)
 })

  //5. some()
  const hasInexpensiveItem=items.some((item)=>{
    return item.price<=200
 })

 console.log(hasInexpensiveItem)