from models import Animal, Dog, Bird
a = [Animal("Hippo", 20, "Male"), Dog("Pesa", 5, "Male", "Ovcharka"), Bird("Ptichka", 1, "Female")]
for i in a:
    print(i)
    i.speak()
    i.move()
