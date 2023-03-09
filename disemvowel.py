def disemvowel(string_):
    return "".join(char for char in string_ if char.lower() not in "aeiou")
