N = int(input())
n = list(map(int, input().split()))

c = 0
for i in range(1, N): 
    if n[i] > n[i-1]:
        c += 1

print(c)