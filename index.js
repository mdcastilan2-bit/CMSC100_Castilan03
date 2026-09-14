//Max Miguel D. Castilan
//D1L
//09-07-26

//global vars
const password_actual = "StoryMaker321"

//function for validating if 2 passwords match
function passValidation (passAct, input){
    let matchCheck = false
    let lengthCheck = false
    let strengthCheck = false

    //checks if the input is the same as the actual password
    switch(input){
        case passAct:
            //console.log("Yeah, yeah, they match")
            matchCheck = true
            break
        default:
            //console.log("They don't match")
            break
    }
    
    //checks if the input has at least 8 characters
    if (passAct.length >= 8){
        lengthCheck = true
        //console.log("Yep, length checks out.")
    }
    else if (passAct.length < 8){
        lengthCheck = false
        //console.log("Too short")
    }
    else {
        lengthCheck = false
        console.log("Length check error.")
    }

    //checks if input has at least 1 number, 1 uppercase character, and 1 lowercase character
    let passArray = passAct.split("")
    let numUpper = 0
    let numLower = 0
    let numNum = 0
    for (let a = 0; a < passArray.length; a++) {
        if (passArray[a].toUpperCase() == passArray[a].toLowerCase()){
            numNum++
        } else {
            if (passArray[a] == passArray[a].toUpperCase()){
                numUpper++
            } else {
                numLower++
            }
        }
    }

    if (numUpper >= 1 && numLower >= 1 && numNum >= 1){
        //console.log("Complex enough")
        strengthCheck = true
    } else if (numUpper < 1 || numLower < 1 || numNum < 1) {
        //console.log("At least one of the complexities is not enough")
        strengthCheck = false
    } else {
        console.log("Something went wrong")
    }

    //checks if all three conditions are satisfied.
    if (matchCheck == true && lengthCheck == true && strengthCheck == true){
        //console.log("Everything is satisfied.")
        return true
    } else if (matchCheck == false || lengthCheck == false || strengthCheck == false) {
        //console.log("At least one of the conditions were unsatisfied.")
        return false
    } else {
        //console.log("Something went wrong")
        return false
    }

}

//function for reversing password
function passReverse (pass) {
    var passArray = pass.split("")
    var passRevArr = []
    for (let a = passArray.length - 1; a >= 0; a--){
        passRevArr.push(passArray[a])
    }
    var passRevAct = passRevArr.join("")
    return passRevAct
}
//function for storing the password to the object
function storeObject (nameInput, passInput, passActual) {
    var newPassword
    if (passValidation(passActual, passInput) == true){
        newPassword = passReverse(passActual)
    } else {
        newPassword = passInput
    }
    const Castilan = {
        name1: nameInput,
        password: newPassword
    }
    return Castilan
}
//Testing
//correct password
var password_input = "StoryMaker321"
passValidation(password_actual,password_input)
//mismatch
password_input = "StoryMaker"
passValidation(password_actual,password_input)
//reverse password
console.log(passReverse(password_actual))
//return object when passInput is correct
password_input = "StoryMaker321"
var newUser = storeObject("Guile", password_input, password_actual)
console.log(newUser.name1)
console.log(newUser.password)
//return object when passInput is false
password_input = "StoryMaker"
var newUser = storeObject("Guile", password_input, password_actual)
console.log(newUser.name1)
console.log(newUser.password)


