def points(games):
    x = 0
    for game in games:
        home = int(game[0])
        away = int(game[-1])
        if home > away:
            x += 3
        elif home == away:
            x += 1
        else:
            continue
    return x


print(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])) # expected output: 30

    # favorite solution
# def points(games):
#     result = 0
#     for item in games:
#         result += 3 if item[0] > item[2] else 0
#         result += 1 if item[0] == item[2] else 0
#     return result
