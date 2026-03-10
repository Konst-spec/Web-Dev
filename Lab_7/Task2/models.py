class Animal:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender 
    def __str__(self):
        return f"{self.name}, {self.age} years, {self.gender}"
    def speak(self):
        print("Sound")
    def move(self):
        print("move")

class Dog(Animal):
    def __init__(self, name, age, gender, breed):
        super().__init__(name, age, gender)
        self.breed = breed
    
    def speak(self):
        print("Bark")
    def move(self):
        print("Run")

class Bird(Animal):
    def __init__(self, name, age, gender):
        super().__init__(name, age, gender)
    
    def speak(self):
        print("Tweet")
    def move(self):
        print("Fly")