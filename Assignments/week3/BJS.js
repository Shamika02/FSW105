//Write a function that accepts two numbers as parameters and returns the sum.

function sumShamika (s, t) {
    if (s == t) {
      return 5 * (s + t);
      } 
     else
     {
      return (s + t);
     }
   }
  console.log(sumShamika(5, 10));
  console.log(sumShamika(20, 40));
  //Write a function that accepts three numbers as parameters and returns the largest of those numbers.

function add(){
    console.log(arguments);
    var sum = 0;
    for(var i =0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(add(6,6,8));
console.log(add(1,2,6));
console.log(add(12,20,5));

//Write a function that accepts one number as a parameter and returns whether that number is even or odd. (Return the string "even" or "odd");
for(let count =0; count<=1;count++){
    count%2==0? console.log(`${count} is even`):console.log(`${count} is odd`);
    ;
   }
   