var shopper = {
myFruit: "apple",
myVegetables: "potatoes",
myMeat:"chicken",
myNam: "Krogers 1220 Locust St",
pList:["pickles","butter","onion"],
displayInfo: function() {
    console.log(`I decided to go to ${shopper.myNam} to shop for ${shopper.myFruit} and ${shopper.myVegetables} while there i also picked up ${shopper.pList}.` );
}
}
shopper.displayInfo();