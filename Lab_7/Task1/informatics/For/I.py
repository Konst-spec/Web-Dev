x = int(input())

count = 0
for i in range(1, x):
    if x % i == 0:
        count += 1 
        if i != x // i: 
            count += 1  

print(count)