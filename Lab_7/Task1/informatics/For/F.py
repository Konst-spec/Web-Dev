x = input()
b = False
for i in x[::-1]:
    if i != "0":
        b = True
    if b:
        print(i, end='')