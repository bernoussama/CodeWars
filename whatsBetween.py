def between(a, b):
    list = []
    for i in range(a, b + 1):
        list.append(i)
    return list


print(between(2, 9))

# best solution:
# #def between(a,b):
#    return list(range(a,b+1))
