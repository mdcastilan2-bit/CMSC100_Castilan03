//Max Miguel D. Castilan
//D1L
//09-07-26

var password_input="StoryMaker"
const password_actual="StoryMaker"
//function for validating if 2 passwords match
function passValidation (passAct, input){
    let matchCheck=false
    let lengthCheck=false
    let strengthCheck=false

    switch(input){
        case passAct:
            console.log("Yeah, yeah, they match")
            matchCheck=true
            break
        default:
            console.log("What the fuck are ya on about!?")
            break
    }

    let passLength=input.length
}

passValidation(password_actual,password_input)
//function for reversing password

//function for storing the password to the object