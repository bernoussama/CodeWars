"""Instructions
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

"""

# /* Prep */

# Parameters:

# Returns:


def duplicate_encode(word):
    # Pseudo:
    word = word.lower()
    dict = {}
    bracketed = ""
    for char in word:
      if char in dict:
        dict[char] += 1
      else:
        dict[char] = 1

    for char in word:
      if dict[char] == 1:
        bracketed += "("
      else:
        bracketed += ")"

    return bracketed


# Examples:
print(duplicate_encode("din"))  # => "((("
