var readlineSync = require('readline-sync');
 var playerName = readlineSync.question("Are you ready to have some fun and destroy the enemy? Please tell me your name. ");

 console.log(`Hello, ${playerName},Thank you for joining me now lets defeat the enemy.`);

 var agSpp = true;
 var agNow = false;

 while (agSpp == true)
{

  const ssId = readlineSync.keyIn('Selection 1 run \n Selection w walk \n Selection A attack',{limit:`$<1-w-A>`});
  if (ssId == 1){
    //Player is RUNS awasy scared and is DEAD and Game is OVER
    console.log(`${playerName}. You Chicken!! Game is Over`);
    agSpp = false; 

 }
 
 else if (ssId =="W" &&  agNow == false)
 {
   //Player does not run away and decides to WALK
   console.log(`${playerName}, keep an eye out on Satanta he's on the prowl and looking for someone to kill! You have a 1/3 chance of being attacked`);
   agNow = true;
 }
 else if (ssId == "W" &&  agNow == true)
{
  //Player does not run and decides to WALK for a second time
console.log(`${playerName}, you have escaped Satanta grasp but Fruitron is right behind you! You have a 1/4 chance of getting your head chopped off.`);
 
}
else if (ssId == "A" &&  agNow == true)
{
  //Player has not found key yet. You need to find key first.
  console.log(`${playerName}, Great job you have used your min attack power and manage to defeat the enemy.`);
}
else if (ssId == "A" &&  agNow == false){
  //Player has already found the key earlier
  console.log(`${playerName},Way to go you have used your max power to defeat the enemy watch them DIE slowly! Congratulations the GAME IS OVER`);
  agSpp = false;
}
}