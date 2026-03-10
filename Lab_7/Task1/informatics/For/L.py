b = input()
d = 0
p = 0

for digit in b[::-1]:
    d += int(digit) * (2 ** p)
    p += 1

print(d)