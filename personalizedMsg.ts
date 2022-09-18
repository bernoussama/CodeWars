// Instructions
/* 
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

    case	           return
name equals owner	 'Hello boss'
otherwise	         'Hello guest'
 */

// /* Prep */

// Parameters:name: string, owner: string

// Returns: string

// Examples:
console.log(greet("oussa", "oussa")); // => "Hello boss"

export function greet(name: string, owner: string): string {
  return name == owner ? "Hello boss" : "Hello guest";
}
