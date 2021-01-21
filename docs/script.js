var deck = [ ];
var shuffledDeck = [];
var index = 0;

// jQuery
$(document).ready( function () {
    jQuery.get('terms.txt', function(data) {
      deck = data.split("\n");
    });
});

function shuffle() {
  deck.pop();
  //console.log("deck:");
  //console.table(deck);
  document.getElementById("shuffleButton").innerHTML = "Shuffle";
  document.getElementById("shuffleButton").value = "Shuffle";
  document.getElementById("termCard").style.visibility='visible';
  document.getElementById("cardCount").style.visibility='visible';
  document.getElementById("definitionCard").style.visibility='hidden';
  if(deck.length<=0){return;}
  var tempDeck = [ ...deck ];
  shuffledDeck = [];
  while (tempDeck.length>0){
    console.log("doing something");
    var randomNumber = Math.floor(Math.random() * Math.floor(tempDeck.length));
    if((randomNumber >= tempDeck.length) || (randomNumber < 0) ||  tempDeck[randomNumber].length<=0 ||  tempDeck[tempDeck.length-1]<=0) {break;}
    var cardInfo = tempDeck[randomNumber].split(",");
    var currentTerm = cardInfo[0];
    var currentDef = cardInfo[1];
    tempDeck[randomNumber] = tempDeck[tempDeck.length-1];
    tempDeck.pop();
    shuffledDeck.push({term:currentTerm,definition1:currentDef});
  }


    //console.log("shuffled:");
    //console.table(shuffledDeck);
    index = 0;
    document.getElementById("term").innerHTML = shuffledDeck[index].term;
    document.getElementById("definitionCard").style.visibility='hidden';
    document.getElementById("definition1").innerHTML = shuffledDeck[index].definition1;
    document.getElementById("cardCount").innerHTML = 1 + " / " + shuffledDeck.length;

}

function nextCard() {
    document.getElementById("definitionCard").style.visibility='hidden';
    document.getElementById("definition1").innerHTML = "";
    index++;
    if(shuffledDeck.length == 0){
      index = 0;
      return;
    } else if(index>=shuffledDeck.length){
      document.getElementById("term").innerHTML = "Done!";
      index = shuffledDeck.length;
    }  else{
      document.getElementById("term").innerHTML = shuffledDeck[index].term;
      document.getElementById("definitionCard").style.visibility='hidden';
      document.getElementById("definition1").innerHTML = shuffledDeck[index].definition1;
      document.getElementById("cardCount").innerHTML = (1 + index) + " / " + shuffledDeck.length;
    }
}

function previousCard() {
    document.getElementById("definitionCard").style.visibility='hidden';
    index--;
    if(shuffledDeck.length == 0){
      index = 0;
      return;
    } else if(index<0){
      index = 0;
    }
    document.getElementById("term").innerHTML = shuffledDeck[index].term;
    document.getElementById("definition1").innerHTML = shuffledDeck[index].definition1;
    document.getElementById("cardCount").innerHTML = (1 + index) + " / " + shuffledDeck.length;
}

function flip() {
  if(document.getElementById("definitionCard").style.visibility=='visible'){
        document.getElementById("definitionCard").style.visibility='hidden';
  } else {
        document.getElementById("definitionCard").style.visibility='visible';
  }
}
