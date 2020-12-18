//1.Remove the last item from the vegetable array
var fruit = ["banana","apple","orange","watermelon"];
var vegetables = ["carrot","tomato","pepper","lettuce"];
var last=vegetables.pop()
console.log(vegetables + "<br>");

///2.Remove the first item from the fruit array.
var fruit = ["banana","apple","orange","watermelon"];
var first = fruit.shift();
console.log(fruit + "<br>");

//3.Find the index of "orange."
var fruit = ["banana","apple","orange","watermelon"];
console.log(fruit.indexOf("orange"));

//4.Add that number to the end of the fruit array.
var fruit = ["banana","apple","orange","watermelon"];
fruit.push("1");
console.log(fruit);

//5.Use the length property to find the length of the vegetable array.
var vegetables = ["carrot","tomato","pepper","lettuce"];
console.log(vegetables.length);

//6.Add that number to the end of the vegetable array.
var last=vegetables.pop()
console.log(vegetables + "<br>")
vegetables.push("3");
console.log(vegetables);

//7.Put the two arrays together into one array. Fruit first. Call the new Array "food".
var vegetables =["carrot","tomato","pepper","3"]
var fruit =["1","apple","orange","watermelon"]
 var food =vegetables.concat(fruit);
 console.log(food);

//8.Remove 2 elements from your new array starting at index 4 with one method.
var food = fruit.concat(vegetables);
    removeValFromIndex = [4,5];    

for (var i = removeValFromIndex.length -1; i >= 0; i--)
   food.splice(removeValFromIndex[i],1);
console.log(food);

//9.Reverse your array.
food.reverse();
console.log(food);

//10.Turn the array into a string and return it
var food = food.join();
console.log(food);