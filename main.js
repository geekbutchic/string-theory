// /******************
//  * YOUR CODE HERE *
//  ******************/
xify = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = result + 'x'
  }
  return result;
}

smilify = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = result + "😊"
  }
  return result; 
}

yellingChars = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + '!';
  }
  return result;
}

indexedChars = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = result + [i] + str[i];
  }
  return result;
}

exclaim = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?" || str[i] === '.') {
      result = result + '!'
    } else {
      // Only pushes if "?" or "."
      result = result + str[i];
    }
  }
  return result;
}

repeatIt = (str, max) => {
  let result = '';
  let count = 0;
  while (count < max) {
    result = result + str;
    count = count + 1;
  }
  return result 
}

truncate = (str) => {
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

ciEmailify = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result = result + '.';
    } else {
      result = result + str[i];
    }
  }
  return result.toLowerCase() + '@codeimmersives.com'
}

reverse = (str) => {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}
// Optional Version changes the result vs for of loop
reverse = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}

onlyVowels = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      result = result + str[i];
      // or result += char
    }
  }
  return result;
}

numberedChars = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    // adds vowels to empty string 
    result = result + '(' + (i + 1) + ')' + str[i];
  }
  return result;
}

crazyCase = (str) => {
  let result = "";

  for (i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (i % 2 === 0) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;  
}


titleCase = (str) => {
  str = str.toLowerCase().split(' ');

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}

// Loop Version
titleCase = (str) => {
  let result = '';
  let shouldCap = true;
  for (char of str) {
    // We should we capitalize the char?
    if (shouldCap) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
    if (char === ' ') {
      shouldCap = true;
    } else {
      shouldCap = false;
    }
  }
  return result;
}

// Alternative version with methods 
camelCase = (str) => {
  return str.split(' ').map(function(word,index){
    if(index == 0){
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

// For Loop Version
camelCase = (str) => {
  let result = '';
  let shouldCap = false;
  for (char of str) {
    // TODO
    // Add character to output string, unless it's a space
    if (char !== ' ') {
      if (shouldCap) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
    }
    // TODO
    // If character is a space capitalize the next letter
    if (char === ' ') {
      shouldCap = true;
    } else {
      shouldCap = false;
    }
  }
  return result;
}

crazyCase2ReturnOfCrazyCase = (str) => {
  let result = '';
  let shouldCap = false;

  for (char of str) {
    // Add character to output string and give uppercase or lowercase
    if (shouldCap) {
      result += char.toUpperCase()
    } else {
      result += char.toLowerCase();
    }

    if (char !== ' ') {
      // Toggles variable 'shouldCap' if the current char is not a space
      shouldCap = !shouldCap;
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
