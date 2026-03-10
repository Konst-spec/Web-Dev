def cat_dog(str):
  c = 0
  d = 0
  for i in range(len(str) - 1):
    if str[i:i+3] == "cat":
      c += 1
    elif str[i:i+3] == "dog":
      d += 1
  return c == d
