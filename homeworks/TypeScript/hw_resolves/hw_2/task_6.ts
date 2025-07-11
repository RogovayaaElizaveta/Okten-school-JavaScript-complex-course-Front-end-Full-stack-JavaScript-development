
let SimpleValues :string|null = prompt('enter number 1 0 -3 ');
if(SimpleValues!== null){
   let numValue :number =+SimpleValues;
   if(numValue !== 0){
    
 console.log('right');
   }else {
      console.log('wrong');
   }
}


