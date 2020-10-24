// /******************
//  * YOUR CODE HERE *
//  ******************/
function xify(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = result + 'x';
  }
  return result;
}
// the character is hard coded 
function smilify(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = result + '😊';
  }
  return result;
}
// always building a new string 
function yellingChars(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + '!';
  }
  return result;
}
// 0!1!2!3!4! --> result + [i] + '!';
// adding this character plus current character
function indexedChars(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = result + i + str[i];
  }
  return result;
}

function numberedChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = result + '(' + (i + 1) + ')' + str[i];
  }
  return result;
}
// you can't make string into number very easily
// you can make a number into a sting with quotations 

function exclaim(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '?' || str[i] === '.') {
      result = result + '!';
    } else {
      result = result + str[i];
    }
  }
  return result;
}
// line 58 is current copy if line 55 is not true 
// line 55 is saying if their are no '?' or '.' return current copy
// if it is true return current copy with '!' instead

function repeatIt(str, max) {
  let result = '';
  let count = 0;
  while (count < max) {
    result = result + str;
    count = count + 1;
  }
  return result;
}
// (while loop) is perfect for this - also how we would solve count sheep
// while loop is best for repeating a string

function truncate(str) {
  if (str.length < 18) {
    return str;
  }

  let result = '';
  for (let i = 0; i < 15; i++) {
    result = result + str[i];
  }

  result = result + '...'
  return result;
}

function ciEmailify(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result = result + '.';
    } else {
      result = result + str[i];
    }
  }
  return result.toLocaleLowerCase() + '@codeimmersives.com';
  // Ternary version 
  // for (let i = 0; i < str.length; i++) {
  // result = result + str[i] === ' ' ?
}

function reverse(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}

function onlyVowels(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      result = result + str[i];
    }
  }
  return result;
}














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
  yellingChars,
  indexedChars,
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
