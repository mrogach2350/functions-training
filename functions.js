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
// console.log(result);

function areaOfACircle(radius) {
    return Math.PI * (radius * radius);
}

var result = areaOfACircle(2);
// console.log(result);

function pythagoreanTheorem(a, b) {
    var c;
    c = Math.pow(a, 2) + Math.pow(b, 2);
    return Math.sqrt(c);
}

var result = pythagoreanTheorem(3, 4);
// console.log(result);

function isXEvenlyDivisibleByY(x, y) {
  if (x % y === 0) {
    return true;
  } else {
    return false;
  }
}

var result = isXEvenlyDivisibleByY(99, 3);
// console.log(result);

function countVowels(word) {
  var count = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y',
    'A', 'E', 'I', 'O', 'U', 'Y']
  for (i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) !== -1){
      count ++;
    }
  }
  return count;
}

var result = countVowels("stealing");
// console.log(result);

function findWdi(arr) {
  if (arr.indexOf("wdi") !== -1){
    return true;
  } else {
    return false;
  }
}

// console.log(findWdi([9,'Bart Simpson', true, 'wdi']));
// console.log(findWdi(['a','b','c']));

function printTriangle(length) {
  var stars = "*";
  for (i = 1; i <= length; i++){
    console.log(stars);
    stars += "*";
  }
}

// printTriangle(5);
