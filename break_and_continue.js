
//*********************break**********************
//breaking the loop

let i =0;
do{
    console.log(i+1);
    if(i ===5){
        break;
    }
    i++;
}while(i<10);
console.log('done!')


// <!-- //*********************continue**********************
// //breaking the block
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

