// /******************
//  * YOUR CODE HERE *
//  ******************/
function xify(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr = newStr + 'x';
  }

  return newStr;
}

let result1 = xify('hello' || 'hi there');
result1;

function smilify(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr = newStr + '😊';
  }
  return newStr;
}

let result2 = smilify('emoji || smile');

function yellingChars(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr = newStr + str[i] + "!";
  }
  return newStr;
}

let result3 = yellingChars('goodness || oh hello');
result3;


function indexedChars(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr = newStr + (i) + str[i];
    // console.log(i)
    // console.log(str[i])
  }
  return newStr;
}

let result4 = indexedChars('hello');
result4;


function numberedChars(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr = newStr + '('+(i+1)+')' + str[i];
  }
  return newStr;
}

let result5 = numberedChars('hello');
result5;


function exclaim(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr = newStr + str[i];
  }
  return newStr;
}

let result6 = exclaim('What are you doing? Are you a fool?')
result6;

function reverse(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr = str[i] + newStr;
  }
  return newStr;
}

let result7 = reverse('colin')
result7;

function repeatIt(str, num) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr = newStr + str[i];
  }
  return newStr;
}

let result8 = repeatIt('beetlejuice', 3)
result8;

function truncate(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr = newStr + str[i];
  }
  return newStr;
}

let result9 = truncate("Well, that's just, like, your opinion man.")
result9;















/********************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars,
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
