//? <---------------  IF…ELSE & ELSE IF STATEMENT  --------------->

//! QUESTION 01

// var inputChar = prompt("Enter a Character (Number or String)");

// if (!isNaN(inputChar)) {
//   console.log(inputChar + " is a Number.");
// } else if (inputChar >= "A" && inputChar <= "Z") {
//   console.log(inputChar + " is an UpperCase Letter.");
// } else if (inputChar >= "a" && inputChar <= "z") {
//   console.log(inputChar + " is a LoweCase Letter.");
// } else {
//   console.log(
//     inputChar + " is Not a Number, Uppercase Letter, or Lowercase Letter."
//   );
// }

//! QUESTION 02

// var firstInt = parseInt(prompt("Enter the First Integer: "));
// var secondInt = parseInt(prompt("Enter the Second Integer: "));

// if (firstInt === secondInt) {
//   console.log("Both Integers are Equal.");
// } else if (firstInt > secondInt) {
//   console.log("The Larger Integer is " + firstInt);
// } else {
//   console.log("The Larger Integer is " + secondInt);
// }

//! QUESTION 03

// var number = parseFloat(prompt("Enter a Number: "));

// if (number > 0) {
//   console.log("The Number is Positive. ");
// } else if (number < 0) {
//   console.log("The Number is Negative. ");
// } else if (number === 0) {
//   console.log("The Number is Zero.");
// } else {
//   console.log("This is Not a Valid Number! ");
// }

//! QUESTION 04

// function isVowel(char) {
//   char = char.toLowerCase();

//   return (
//     char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//   );
// }

// var inputChar = prompt("Enter a Character: ");

// if (inputChar.length === 1 && isVowel(inputChar)) {
//   console.log(inputChar + " is a Vowel.");
// } else {
//   console.log(inputChar + " is Not a Vowel.");
// }

//! QUESTION 05

// var correctPassword = "hamza";

// var userPassword = prompt("Enter Your Password:");

// if (!userPassword) {
//   console.log("Please Enter Your Password!");
// } else if (userPassword === correctPassword) {
//   console.log(
//     "Correct! The password you entered matches the original password."
//   );
// } else {
//   console.log("Incorrect Password!");
// }

//! QUESTION 06

// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good Day";
// } else {
//   greeting = "Good Evening";
// }

//! QUESTION 07

// var time = parseInt(
//   prompt("Enter the Time (in 24-hour format e.g., 1900 for 7:00 pm)")
// );

// if (time >= 0 && time < 1200) {
//   console.log("Good Morning!");
// } else if (time >= 1200 && time < 1700) {
//   console.log("Good Afternoon!");
// } else if (time >= 1700 && time < 2100) {
//   console.log("Good Evening!");
// } else if (time >= 2100 && time <= 2359) {
//   console.log("Good Night!");
// } else {
//   console.log("Invalid Input! Please Enter a time in 24 hour format.");
// }

//? <---------------  ARRAYS  --------------->

//! QUESTION 01

// var studentNames = [];

//! QUESTION 02

// var studentNames = new Array();

//! QUESTION 03

// var stringArray = ["Hamza", "Raza"];

//! QUESTION 04

// var numberArray = [1, 2, 3, 4];

//! QUESTION 05

// var booleanArray = [true, false];

//! QUESTION 06

// var mixedArray = ["Hamza", 2, true];

//! QUESTION 07

// var qualificationsArray = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil",
//   "PhD",
// ];

// document.write("<h1> Qualifications: </h1>");

// for (var i = 0; i < qualificationsArray.length; i++) {
//   document.write(i + 1 + ") " + qualificationsArray[i] + "<br>");
// }

//! QUESTION 08

// var studentsName = ["Hamza", "Hasnain", "Huzaifa"];

// var studentsScore = [455, 425, 390];

// for (var i = 0; i < studentsName.length; i++) {
//   var totalMarks = 500;
//   var percentage = (studentsScore[i] / totalMarks) * 100;

//   document.write(
//     "Score of " +
//       studentsName[i] +
//       " is " +
//       studentsScore[i] +
//       ". " +
//       "Percentage: " +
//       percentage +
//       "%" +
//       "<br>"
//   );
// }

//! QUESTION 09

// var colorNames = ["Red", "Green", "blue"];
// console.log("Orignal Array: \n" + colorNames.join(", "));

//Todo part a

// var colorAddBeginning = prompt("Enter a Color to add to the Beginnig:");
// colorNames.unshift(colorAddBeginning);
// console.log("After Color Add to the Beginning: \n" + colorNames.join(", "));

//Todo part b

// var colorAddEnd = prompt("Enter a Color to Add to the End");
// colorNames.push(colorAddEnd);
// console.log("After color Add to The End: \n" + colorNames.join(", "));

//Todo part c

// colorNames.unshift("Golden", "Purple");
// console.log(
//   "After Adding Two More Colors to The Beginning: \n" + colorNames.join(", ")
// );

//Todo part d

// colorNames.shift();
// console.log("After Deleting The First Color: \n" + colorNames.join(", "));

//Todo part e

// colorNames.pop();
// console.log("After Deleting The Last Color: \n" + colorNames.join(", "));

//Todo part f

// var addToIndex = parseInt(
//   prompt("Enter the Index where you want to  add a Color")
// );
// var colorToAddAtIndex = prompt("Enter The Color to add at that Index");
// colorNames.splice(addToIndex, 0, colorToAddAtIndex);
// console.log(
//   "After Adding the Color at Index " +
//     addToIndex +
//     ": \n" +
//     colorNames.join(", ")
// );

//Todo part g

// var indexToDelete = parseInt(
//   prompt("Enter the Index From which you want to delete color(s)")
// );
// var numColorsToDelete = parseInt(
//   prompt("Enter The Number of Colors to delete")
// );
// colorNames.splice(indexToDelete, numColorsToDelete);
// console.log(
//   "After Deleting " +
//     numColorsToDelete +
//     " Color(s) from Index " +
//     indexToDelete +
//     ": \n" +
//     colorNames.join(", ")
// );

//! QUESTION 10

// var studentScore = [320, 230, 480, 120];
// console.log("Scores of Students: " + studentScore.join(", "));

// studentScore.sort(function (a, b) {
//   return a - b;
// });

// console.log("Ordered Scores of Students: " + studentScore.join(", "));

//! QUESTION 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Pishawar"];
// var selectedCities = [];

// selectedCities = cities.slice(2, 4);

// console.log("Cities List: " + cities);

// console.log("Selected Cities List: " + selectedCities);

//! QUESTION 12

// var arr = ["This", "is", "My", "Cat"];

// var singleString = arr.join(" ");

// console.log("Array: \n" + arr.join(","));
// console.log("String: \n" + singleString);

//! QUESTION 13

// var fifoArray = [];

// fifoArray.push("keyboard", "mouse", "printer", "moniter");

// var firstValue = fifoArray[0];
// var secondValue = fifoArray[1];
// var thirdValue = fifoArray[2];
// var fourthValue = fifoArray[3];

// document.write("Devices: " + "<br>" + fifoArray.join(",") + "<br><br>");
// document.write("Out: " + "<br>" + firstValue + "<br>");
// document.write("Out: " + "<br>" + secondValue + "<br>");
// document.write("Out: " + "<br>" + thirdValue + "<br>");
// document.write("Out: " + "<br>" + fourthValue + "<br>");

//! QUESTION 14

// var fifoArray = [];

// fifoArray.push("keyboard", "mouse", "printer", "moniter");

// var lastValue = fifoArray[3];
// var secondLastValue = fifoArray[2];
// var thirdLastValue = fifoArray[1];
// var fourthLastValue = fifoArray[0];

// document.write("Devices: " + "<br>" + fifoArray.join(",") + "<br><br>");
// document.write("Out: " + "<br>" + lastValue + "<br>");
// document.write("Out: " + "<br>" + secondLastValue + "<br>");
// document.write("Out: " + "<br>" + thirdLastValue + "<br>");
// document.write("Out: " + "<br>" + fourthLastValue + "<br>");

//! QUESTION 15

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var selectHTML = '<select id="manufacturerSelect">\n';

for (var i = 0; i < manufacturers.length; i++) {
  selectHTML +=
    '  <option value="' +
    manufacturers[i] +
    '">' +
    manufacturers[i] +
    "</option>\n";
}
selectHTML += "</select>\n";

document.write(selectHTML);
