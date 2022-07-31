/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior" */

//indexof delimiter +1 to uppercase
function toCamelCase(str) {
  if (str.includes("-")) {
    if (str[0] === str[0].toUpperCase()) {
      pascalCase(str, "-");
    }
    camelCase(str, "-");
  } else if (str.includes("_")) {
    if (str[0] === str[0].toUpperCase()) {
      pascalCase(str, "_");
    }
    camelCase(str, "_");
  }

  // functions
  function camelCase(string, delimit) {
    splitBy(string, delimit)
      .map((el, i, arr) => {
        arr.indexOf(el) !== 0 ? el[0].toUpperCase() : el;
      })
      .join("");
  }

  function pascalCase(string, delimit) {
    splitBy(string, delimit)
      .map((el, i, arr) => {
        el[0].toUpperCase();
      })
      .join("");
  }

  function splitBy(string, delimit) {
    return string.split(delimit);
  }
}

console.log(toCamelCase("the-stealth-warrior"));

// favorite solution

/* 
function toCamelCase(str){
    if (str.length === 0) return str;
    let firstUpperCase = false;
    let res = "";
  
    if (str[0] === str[0].toUpperCase()) firstUpperCase = true;
  
    let arrStr = str.split(/-|_/)
  
    for (let i = 0; i < arrStr.length; i++) {
      if (i===0 && !firstUpperCase) {
        res += arrStr[i];
      } else {
        res += capitilizeFirstLetter(arrStr[i]);
      }
    }
    
    return res;
  }
  
  function capitilizeFirstLetter (string) {
    return string[0].toUpperCase() + string.slice(1)
  } 
  */
