module.exports = function check(str, bracketsConfig) {
  let brackets = {};
  let closeBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i ++) {
    brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    closeBrackets.push( bracketsConfig[i][1] );
  }
  let stack = [];

  const returnKey = (obj, value) => {
    for (key in obj) {
      if (obj[key] === value) return key;
    }
  }

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (closeBrackets.includes(currentSymbol)) {
      if (stack[stack.length - 1] === returnKey(brackets, currentSymbol)) {
        stack.pop();
      }
      else stack.push(currentSymbol);
    }
    else {
      stack.push(currentSymbol);
    }
  }
  

  /*
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    
    
    if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
      } else {
        if (stack.length === 0 ) {
          return false;
        }

      let topElement = stack[stack.length - 1];
              if (brackets[currentSymbol] === topElement) {
                stack.pop();
              }
      else {
      return false;
      }
    }
  }

  */
  return ( stack.length === 0 );
}
