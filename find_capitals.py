def find_capitals(str):
    indices = []
    # iterate through chars
    for idx, char in enumerate(str):

        # check if they"re uppercase
        if char == char.upper():
            indices.append(idx)

    # if uppercase add its index to new list
        else:
            continue

    # if not do nthn
    return indices


print(find_capitals("AbCdEfGh"))
