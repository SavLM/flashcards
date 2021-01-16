var deck = [
    {term:"	우의	",definition1:"	friendship	"},
    {term:"	우유	",definition1:"	milk	"},
    {term:"	아이	",definition1:"	child	"},
    {term:"	이	",definition1:"	this	"},
    {term:"	위	",definition1:"	above	"},
    {term:"	노래	",definition1:"	song	"},
    {term:"	개미	",definition1:"	ant	"},
    {term:"	도쿄	",definition1:"	tokyo	"},
    {term:"	씨	",definition1:"	see	"},
    {term:"	도넛	",definition1:"	doughnut	"},
    {term:"	아파트	",definition1:"	apartment	"},
    {term:"	파티	",definition1:"	party	"},
    {term:"	커피	",definition1:"	coffee	"},
    {term:"	남자	",definition1:"	man	"},
    {term:"	여자	",definition1:"	woman	"},
    {term:"	또는	",definition1:"	or	"},
    {term:"	여자들	",definition1:"	women	"},
    {term:"	학교	",definition1:"	school	"},
    {term:"	빵	",definition1:"	bread	"},
    {term:"	사과	",definition1:"	apple	"},
    {term:"	집	",definition1:"	house	"},
    {term:"	책	",definition1:"	book	"},
    {term:"	연필	",definition1:"	pencil	"},
    {term:"	음식	",definition1:"	food	"},
    {term:"	장소	",definition1:"	place	"},
    {term:"	사람	",definition1:"	person	"},
    {term:"	물건	",definition1:"	thing	"},
    {term:"	예	",definition1:"	yes	"},
    {term:"	고양이	",definition1:"	cat	"},
    {term:"	개	",definition1:"	dog	"},
    {term:"	여자아이	",definition1:"	girl	"},
    {term:"	남자아이	",definition1:"	boy	"},
    {term:"	동물	",definition1:"	animal	"},
    {term:"	저의	",definition1:"	my	"},
    {term:"	제가	",definition1:"	I	"},
    {term:"	아니요	",definition1:"	no	"},
    {term:"	예	",definition1:"	yes	"},
    {term:"	산	",definition1:"	mountain	"},
    {term:"	바다	",definition1:"	ocean	"},
    {term:"	공원	",definition1:"	park	"},
    {term:"	한국	",definition1:"	korea	"},
    {term:"	방	",definition1:"	room	"},
    {term:"	길	",definition1:"	road	"},
    {term:"	자동차	",definition1:"	car	"},
    {term:"	차	",definition1:"	tea	"},
    {term:"	가족	",definition1:"	family	"},
    {term:"	신문	",definition1:"	newspaper	"},
    {term:"	공	",definition1:"	ball	"},
    {term:"	친구	",definition1:"	friend	"},
    {term:"	메시지	",definition1:"	message	"},
    {term:"	학생	",definition1:"	student	"},
    {term:"	영회	",definition1:"	movie	"},
    {term:"	재미	",definition1:"	fun	"},
    {term:"	맛	",definition1:"	bad	"},
    {term:"	멋	",definition1:"	coolness	"},
    {term:"	의미	",definition1:"	meaning	"},
    {term:"	매력	",definition1:"	charm	"},
    {term:"	인기가	",definition1:"	popularity	"},
    {term:"	출신입니다	",definition1:"	am from	"},
    {term:"	가수	",definition1:"	singer	"}
  ];

var shuffledDeck = [];
var index = 0;

function shuffle() {
  document.getElementById("shuffleButton").innerHTML = "Shuffle";
  document.getElementById("shuffleButton").value = "Shuffle";
  document.getElementById("termCard").style.visibility='visible';
  document.getElementById("cardCount").style.visibility='visible';
  document.getElementById("definitionCard").style.visibility='hidden';
  if(deck.length<=0){return;}
  var tempDeck = [ ...deck ];
  shuffledDeck = [];
  while (tempDeck.length>0){
    var randomNumber = Math.floor(Math.random() * Math.floor(tempDeck.length));
    if((randomNumber >= tempDeck.length) || (randomNumber < 0)) {break;}
    var currentTerm = tempDeck[randomNumber];
    var lastTerm = tempDeck[tempDeck.length-1];
    tempDeck[randomNumber] = lastTerm;
    tempDeck.pop();
    shuffledDeck.push(currentTerm);
  }
    //console.log("deck:");
    //console.table(deck);
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
