import sys

class Grader:
    def __init__(self):
        self.name = input("What is your name? ")
        self.assignment = input("What is the assignment's name? ")
        self.gradeStr = input ("What grade did you get? ")
        self.grade = int(float(self.gradeStr))

    def getGrade(self):
        if self.grade >= 100:
            return self.name + ", you got a perfect A+ in " + self.assignment + "!"
        elif self.grade >= 90 and self.grade < 100:
            return self.name + ", you got an A in " + self.assignment +"! Great job!"
        elif self.grade >= 80 and self.grade < 90:
            return self.name + ", you got a B in " + self.assignment +". Keep up the good work!"
        elif self.grade >= 70 and self.grade < 80:
            return self.name + ", you got a C in " + self.assignment +". Make sure you're checking for errors"
        elif self.grade >= 60 and self.grade < 70:
            return self.name + ", you got a D in " + self.assignment +". Please review the material again"
        else:
            return self.name + ", you got an F in " + self.assignment +", see me after class."

myGrader = Grader()
print(myGrader.getGrade())
