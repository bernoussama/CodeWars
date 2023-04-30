x = 5


def overflow():
    y = 6
    overflow()


print(x)
# print(y)
# overflow()


class Person():
    def __init__(self, nom):
        self.nom = nom

    def __str__(self):
        return f"name : {self.nom}"


hamid = Person("hamid")

print(hamid)
