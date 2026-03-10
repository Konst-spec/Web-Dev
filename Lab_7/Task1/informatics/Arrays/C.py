N = int(input())
n = list(map(int, input().split()))

c = 0
for num in n:
    if num > 0:
        c += 1

print(c)