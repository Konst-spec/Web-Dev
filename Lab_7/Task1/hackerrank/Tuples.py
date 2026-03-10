if __name__ == '__main__':
    n = int(input())
    
    numbers = tuple(map(int, input().split()))
    
    print(hash(numbers))