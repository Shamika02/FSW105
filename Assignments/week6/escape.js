 var readlineSync = require('readline-sync');
 var playerName = readlineSync.question("May I have your name please? ");

 console.log(`Welcome, ${playerName}, to the Escape Room Game Simuilator!`);

 var isLifeLeft = true;
 var hasFoundKey = false;

 while (isLifeLeft == true)
{
 const menuId = readlineSync.keyIn('Select 1 to Put hand in the hole \n Select 2 to Find the key \n Select 3 to Open the door',{limit:`$<1-3>`});
 if (menuId == 1){
   //Player is DEAD and Game is OVER
   console.log(`${playerName}. sorry you are DEAD. Game is Over`);
   isLifeLeft = false; 
 }
 else if (menuId ==2 && hasFoundKey == false)
 {
   //Player has not found the key
   console.log(`${playerName}, you have  not found the key `);
   hasFoundKey = true;
 }
 else if (menuId == 2 && hasFoundKey == true)
{
  //Player has already found the key
  console.log(`${playerName}, you have already found the key earlier. Please proceed to next option.`);
 
}
else if (menuId == 3 && hasFoundKey == false)
{
  //Player has not found key yet. You need to find key first.
  console.log(`${playerName}, you need to find the key first.`);
}
else if (menuId == 3 && hasFoundKey == true){
  //Player has already found the key earlier
  console.log(`${playerName}, you have found the key successully and have unlocked the door! Congratulations the GAME IS OVER`);
  isLifeLeft = false;
}
}