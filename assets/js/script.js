var generateBtn = document.querySelector("#generate");

// Vars for all password choices

var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var speChar = "`~!@#$%^&*()_-+=\|?/;:><.,";
var passwordBox = "";

// Add on click event 
generateBtn.addEventListener("click", writePassword);

// Function to create password in the text area

function writePassword() {

    password.value === "";
    var fullPassword = "";

      // Chose password criteria
    var lowerAlphabet = confirm("Do you want to have lowercase alphabets in password?");
    var upperAlphabet = confirm("Do you want to have uppercase alphabets in password?");
    var numeric = confirm("Do you want to have numeric values in password?");
    var specialChar = confirm("Do you want to have special characters in password??");
    var passwordLength = prompt("Please choose number of characters in the password, minimum 8 and maximum 128.");


    // Function to check if number of characters are between 8 and 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose minimum 8 or maximum 128 characters to generate password.");
        passwordLength = "";
    }

    // If all  boolleans chosen as no
    if (lowerAlphabet === false && upperAlphabet === false && num === false && specialChar === false) {
    alert("You must chose at least one password criteria.");
    var lowerAlphabet = confirm("Do you want to have lowercase alphabets in password?");
    var upperAlphabet = confirm("Do you want to have uppercase alphabets in password?");
    var numeric = confirm("Do you want to have numeric values in password?");
    var specialChar = confirm("Do you want to have special characters in password??");
    passwordLength = "";
    }

    // Use the criteria that are selected to generate the password
    if (lowerAlphabet) {
        passwordBox += lowerChar;
    }

    if (upperAlphabet) {
        passwordBox += upperChar;
    }

    if (numeric) {
        passwordBox += numChar;
    }

    if (specialChar) {
        passwordBox += speChar;
    }

    // To determine the length of password 
    for (var i = 0; i < passwordLength; i++) {
        fullPassword += passwordBox.charAt(Math.floor(Math.random() * passwordBox.length));
    }
    password.value = fullPassword;

}


// Source: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard

function copy() {
  var copyText = document.querySelector("#clip");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);