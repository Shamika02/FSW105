//Section A
//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
var arr = [3,6,8,2];
 
    var result = arr.filter(function(element){
      return element > 5;
    });  
      console.log( 'fiveAndGreaterOnly' + ' ' + result); 
    
    //2) Given an array of numbers, return a new array that only includes the even numbers.
    let getEvenNumber =()=>{
      var arr =[3,6,8,2];
      let the_evens = arr.filter(number => number %2 == 0);
      console.log('Even Number:' + the_evens)
    }
      getEvenNumber();
    
    
    //Section B
    //1) Make an array of numbers that are doubles of the first array.
  const doubleNumbers =[2,5,100];
  const ddouble = xs =>
  xs.reduce ((ys, x) => [...ys, x * 2], [])
  
  console.log(ddouble(doubleNumbers))
    
    //2) Take an array of numbers and make them strings.
    var stringItUp = [2,5,100];
    var done= stringItUp.toString();
    console.log('stringItUp' + ' ' + done);

    //3) Capitalize each of an array of names.
    var capitalizeNames = ["john","JACOB","jinGleHeimer","schmidt"];   
    const upOne = capitalizeNames.map(capitalizeNames => capitalizeNames.toUpperCase());
    console.log('capitalize names' + ' ' + upOne)
    
    //Section C
    //1) Turn an array of numbers into a total of all the numbers.
    var total = [1, 2, 3,];
        
        // Getting sum of numbers
        var sum = total.reduce(function(a, b){
            return a + b;
        }, 0);
        
    console.log('total' +' '+ sum);
    
    //2) Turn an array of numbers into a long string of all those numbers.
    var stringToConcat = [1,2,3];
    let number = stringToConcat.toString();
    console.log('stringToConcat' + ' '+ number);

//3) Turn an array of voter objects into a count of how many people voted

    let totalVotes =[
      {name:'Bob', age: 30, voted: true},
      {name:'Jake', age: 32, voted: true},
      {name:'Kate', age: 25, voted: false},
      {name:'Sam', age: 20, voted: false},
      {name:'Phil', age: 21, voted: true},
      {name:'Ed', age: 55, voted: true},
      {name:'Tami', age: 54, voted: true},
      {name:'Mary', age: 31, voted: false},
      {name:'Becky', age: 43, voted: false},
      {name:'Joey', age: 41, voted: true},
      {name:'Jeff', age: 30, voted: true},
      {name:'Zack', age: 19, voted: false}
    ];
    let counter = true;
    for (const obj of totalVotes) {
      if (obj.voted  === 'true') counter++;
    }
    
    console.log(counter);


    
    //Section D
    //1) Sort an array from smallest number to largest.
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a-b});
    console.log(points);
    
    //2) Sort an array from largest number to smallest.
    var points1 = [40, 100, 1, 5, 25, 10];
    points1.sort(function(a, b){return b-a});
    console.log(points1);
    
    
    






