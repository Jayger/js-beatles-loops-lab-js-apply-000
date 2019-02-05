
function theBeatlesPlay(players, instruments){
var everyPlayer = [];  
  for(var i = 0; i < players.length ; i++){
      everyPlayer.push(`${players[i]} plays ${instruments[i]}`);
  }
  return everyPlayer;
}

function johnLennonFacts(facts) {
  var crazyFacts = [];
  // initialize the while loop
  var i = 0;
  // while i is less than the length of facts 
  while(i < facts.length){
    // add the concatenated items to the "crazyFacts" array
    crazyFacts.push(facts[i] + "!!!");
    i++;
  }
  // return the new array
  return crazyFacts;
}

// a function that takes a number as an argument
function iLoveTheBeatles(n) {
  // initialize an empty array
  const emptyArr = [];
  //start the do-while loop
  do {
    // adds "I love the beatles!"
    emptyArr.push("I love the Beatles!");
    // increases the parameter number by 1
    n++;
    // tests if the parameter is less than 15 
} while(n < 15);
// returns the not so empty array
return emptyArr;
  
}