//Section A
//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
var arr = [2, 13, 6, 22,17,3,4];
 
    var result = arr.filter(function(element){
      return element >= 5;
    });
    console.log(result + "<br>"); // Prints: 5,7

//2) Given an array of numbers, return a new array that only includes the even numbers.
let getEvenNumber =() =>{
  var arr =[2, 13, 6, 22,17,3,4];
  let the_evens = arr.filter(number => number %2 == 0);
  console.log('Even Number:' + the_evens)
}
  getEvenNumber();


//Section B
//1) Make an array of numbers that are doubles of the first array.
var repeated = new Array(2).fill("6,9,12,11,5").flat();
console.log(repeated);

//2) Take an array of numbers and make them strings.
var arr = arr.join();
console.log(arr);
//3) Capitalize each of an array of names.
var name1 = ["peter","sharon","brian","michell"];   
name1 = name1.map(function(x){ return x.toUpperCase(); })
console.log(name1)

//Section C
//1) Turn an array of numbers into a total of all the numbers.
var number = [2, 13, 6, 22,17,3,4];
console.log(number.length);

//2) Turn an array of numbers into a long string of all those numbers.
var number = number.join();
console.log(number);

//Section D
//1) Sort an array from smallest number to largest.
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
console.log(points);

//2) Sort an array from largest number to smallest.
var points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a, b){return b-a});
console.log(points1);


