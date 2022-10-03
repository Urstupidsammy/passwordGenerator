var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
    if (!max){
        max = min
        min = 0
    }
    var rand = Math.random()
return Math.floor(min + (1 - rand) + rand*max)
}
function getRandomItem(list){
    return list[randomInt(list.length)]
}
    

function generatePassword() {
 

  while(true) {
    var userInput = window.prompt("How long would you like your password to be?")
//user cancelled prompt
    if (userInput === null){
     return
    }

    var passwordLength = parseInt(userInput)

    if(isNaN(passwordLength)) {
        window.alert("That is not a number.") 
    }
    else if(passwordLength < 8 || passwordLength > 128) {
        window.alert("Invalid Password Length! Password must be between 8 and 128 character.s")
    } else {
        break
    }
    

  }
  
  var userWantsNumber = window.confirm("Would you like to add numbers to your password")
  var userWantsSymbols = window.confirm("Would you like to add symbols to your password")
  var userWantsLowercase = window.confirm("Would you like to add lowercase letters to your password")
 var userWantsUppercase = window.confirm("Would you like to add uppercase letters to your password")

 var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 var symbolList = ["!", "@", "#", "$", "%", "&", "*"]
 var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "u", "r", "s", "t", "u", "v", "w", "y", "x", "z"]
 var uppercaseList = []

 var optionsList = []

 for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
 }

 if (userWantsNumber === true) {
    optionsList.push(numberList)
}

if (userWantsSymbols=== true) {
    optionsList.push(symbolList)
    }

if (userWantsLowercase === true) {
    optionsList.push(lowercaseList)
    }

if (userWantsUppercase === true) {
    optionsList.push(uppercaseList)
     }

if (optionsList.length === 0) {
    optionsList.push(lowercaseList)
}

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++){
    var randomList = getRandomItem(optionsList)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
}

return generatedPassword



}


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    
    if (password){
        passwordText.value = password;
    }
    

}

generateBtn.addEventListener("click", writePassword);