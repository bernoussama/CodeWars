// Instructions
/* 
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
 */

// /* Prep */

// Parameters:

// Returns:

// Examples:
console.log(hello()); // => Hello, World!
console.log(hello("jOhN")); // => Hello, john!

export function hello(name = ""): string {
  switch (name) {
    case "":
      return "Hello, World!";
      break;

    default:
      name = name.toLowerCase();
      let fistChar = name.charAt(0).toUpperCase();
      name = name.slice(1);
      name = fistChar + name;
      return `Hello, ${name}!`;
      break;
  }
}
