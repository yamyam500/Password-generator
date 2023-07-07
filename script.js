// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase=["A", "B", "C", "D", "E","F","G","H","I","J","k","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase=["a", "b", "c", "d", "e", "f","g","h","i","j","k","l",'m',"n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers=['1','2','3','4','5','6','7','8','9','0']
var specialChar=["!", "@", "#", "$", "%", "^", "&", "*", "(",")","=","+","?","/","<","_"]

var pWLenght =0
var choices=[]
var result=""

function generatePassword() {

  pWLenght= prompt("Please enter a password with a lenght between 8 and 128 characters")
if (pWLenght<8 || pWLenght>128 || pWLenght ==="" ||isNaN(pWLenght)){
  // pWLenght= prompt("Please enter a password with a lenght between 8 and 128 characters")
  alert("please enter a password with a lenght between 8 and 128 characters")
  return;
} else {
  //confirms on the arrays

var confirmUpperCase= confirm("Would you like to include Upper case letters on your password?")
if(confirmUpperCase===true){
  choices= choices.concat(upperCase)
}
var confirmlowerCase= confirm("Would you like to include Lower case letters on your password?")
if(confirmlowerCase === true){
  choices= choices.concat(lowerCase)
}
var confirmNumbers= confirm("Would you like to include Upper case letters on your password?")
if(confirmNumbers===true){
  choices= choices.concat(numbers)
}
var confirmSpecialChar= confirm("Would you like to include Upper case letters on your password?")
if(confirmSpecialChar===true){
  choices= choices.concat(specialChar)
}

for (var i= 0; i < pWLenght; i++){
var randomIndex = Math.floor(Math.random() * choices.length);
result += choices[randomIndex];
} 

return result;
}


}
  



  // Write password to the #password input
function writePassword(){
  
  var password = generatePassword() || "";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listerner to generate button
generateBtn.addEventListener("click", writePassword)

  





