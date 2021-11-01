class Grader
    def initialize()
        puts "What is your name?"
        @name = gets.strip

        puts "What is the assignment's name?"
        @assignment = gets.strip

        puts "What is your number grade?"
        @grade = gets.to_i
    end
    def getGrade()
        if @grade >= 100
            puts @name + ", you got a perfect A+ in " + @assignment + "!"
        elsif @grade >= 90 and @grade < 100
            puts @name + ", you got an A in " + @assignment + "! Great job!"
        elsif @grade >= 80 and @grade < 90
            puts @name + ", you got a B in " + @assignment + ", keep up the good work!"
        elsif @grade >= 70 and @grade < 80
            puts @name + ", you got a C in " + @assignment + ", make sure to check for errors."
        elsif @grade >= 60 and @grade < 70
            puts @name + ", you got a D in " + @assignment + ", please review the material again."
        else
            puts @name + ", you got an F in " + @assignment + ", see me after class."
        end
    end
end

myGrader = Grader.new
print(myGrader.getGrade())
