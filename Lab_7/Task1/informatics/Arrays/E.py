N = int(input())
n = list(map(int, input().split()))

f = False
for i in range(1, N):
    if (n[i] > 0 and n[i-1] > 0) or (n[i] < 0 and n[i-1] < 0):
        f = True
        break 

if f:
    print("YES")
else:
    print("NO")