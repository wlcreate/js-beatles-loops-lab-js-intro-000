// add solution here

//function which accepts two parameters an array of musicians and of instruments.
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var factsArray = []
  let i = 0
  while (factsArray.length < facts.length) {
    factsArray.push(facts[i] + "!!!");
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return array
}
