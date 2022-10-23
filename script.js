
let number = [10, 30, 40, 70, 100];

function highest(a) {

    let max = -Infinity;

    for(let i = 0; i < a.length; i++) {
        
        if (max < a[i]) {
           
            max = a[i];
        }
    }

    return (max);
}
console.log(highest(number));


function lowest(a){
    
    let min = Infinity;

    for (let k = 0; k < a.length; k++){

        if(min > a[k]) {
        
        min = a[k];
        }
    } 
      return (min);


}
console.log(lowest(number));


function divide(a){
for(let y=0; y < a.length; y++){
  
    let sum = (highest + lowest) / 2;
       
}
} 
       return (sum);

    console.log(sum)



