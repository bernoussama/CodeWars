def maskify(cc):
    masked = ''
    if len(cc)> 4:
        cc = list(cc)
        cc[:-4] = '#'*(len(cc)-4)
        for i in cc:
            masked += i
    else:
        masked = cc
    return masked


print(maskify("4556364607935616"))