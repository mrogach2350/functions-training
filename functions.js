function combineWords(word1, word2) {
    return word1 + word2;
}

var result = combineWords('dog', 'house');
// console.log(result);

function repeatPhrase(phrase, n) {
  var idx = 1;
  while (idx <= n) {
    console.log(phrase);
    idx ++;
  }
}

// repeatPhrase("Hello", 5);

function toTheNthPower(number, power) {
  var idx = 1;
  var num = number;
  while (idx < power) {
    num *= number;
    idx ++;
  }
  return num;
}

var result = toTheNthPower(4, 5);
console.log(result);
