# Convert Hexadecimal base to decimal base

def hex_to_dec(s):

    dec = 0
    string = str(s).upper()[::-1]
    for char in string:

        if char == 'A':
            dec += 10 * pow(16, string.index(char))
        elif char == 'B':
            dec += 11 * pow(16, string.index(char))
        elif char == 'C':
            dec += 12 * pow(16, string.index(char))
        elif char == 'D':
            dec += 13 * pow(16, string.index(char))
        elif char == 'E':
            dec += 14 * pow(16, string.index(char))
        elif char == 'F':
            dec += 15 * pow(16, string.index(char))
        else:
            dec += int(char) * pow(16, string.index(char))
    return dec


print(hex_to_dec(16742))
