class Grader{
    constructor(){
        const readline = require("readline");
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })
    
        rl.question("What is your name? ",(name)=>{
            rl.question("What is the assignment called? ",(assignment)=>{
                rl.question("What grade did you get? ",(grade)=>{
                    if(Number(grade) >= 100){
                        console.log(name + ", you got a perfect A+ in " + assignment +"!")
                    }
                    else if(Number(grade) >= 90 && Number(grade) < 100){
                        console.log(name + ", you got an A in" + assignment + "! Great job!")
                    }
                    else if(Number(grade) >= 80 && Number(grade) < 90){
                        console.log(name + ", you got a B in" + assignment + ". Keep up the good work!")
                    }
                    else if(Number(grade) >= 70 && Number(grade) < 80){
                        console.log(name + ", you got a C in" + assignment + ". Make sure you're checking for errors.")
                    }
                    else if(Number(grade) >= 60 && Number(grade) < 70){
                        console.log(name + ", you got a D in" + assignment + ". Please review the material again")
                    }
                    else{
                        console.log(name + ", you got an F in" + assignment + ". See me after class.")
                    }
                    rl.close()
                })
                rl.close()
            })
            rl.close()
        })
    }
}

myGrader = new Grader()