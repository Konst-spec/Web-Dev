def min(a, b, c, d):
    if a <= b and a <= c and a <= d:
        return a
    if b <= c and b <= d:
        return b
    if c <= d:
        return c
    return d