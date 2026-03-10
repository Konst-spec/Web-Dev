if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    scores = sorted(set([student[1] for student in students]))

    secLowSc = scores[1]

    secLowst = [student[0] for student in students if student[1] == secLowSc]

    secLowst.sort()

    for name in secLowst:
        print(name)