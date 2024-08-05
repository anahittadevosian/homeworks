document.getElementById("subject").innerText = 'Tasks';
document.getElementById("homework6").innerHTML = 'Variables';
document.getElementById("homework7.1").innerHTML = 'Fahrenheit to Celsius Converter';
document.getElementById("homework7.2").innerHTML = 'CV Data represented with JSON';

// ________Homework lesson 6________ 
// Below are used all types of variables, some data types (String, Number, Boolean, Object, Array)

var a, b, sum;
a = 100
b = 11
sum = a+b 
console.log(sum)

let thispage, numbers, cont
thispage = "Hi, this page contains homeworks for lessons "
numbers = [5, 6, 7, 8]
cont = " or more details please open js file )))"
discription = thispage + numbers + cont
document.getElementById("ex1").innerText = discription

let month = "august"
year = 2024
date = month + "." + year

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
weekend = ["Saturday", "Sunday"]

const doneby = { 
    fname: "Liana",
    lname: "Chalabyan",
    age: 99,
    role: "studant",
    email: "example.@gmail.com"
}
document.getElementById("ex2").innerHTML = `The page was created on 04.${date} (${weekend[0]}) by ${doneby.fname}.`

// ________Homework lesson 7________ 
// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Function 
function convertTemperature() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    
    // Convert the value to Celsius
    const celsius = fahrenheitToCelsius(parseFloat(fahrenheit));
    
    // Display the result on the page
    document.getElementById('result').textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    
    // Also write the result to the console
    console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);
}

// CV Data represented with JSON
const userJSON = {
    "flname": "Liana Chalabyan",
    "email": "chalabyanliana@gmail.com",
    "phone": "+374 94 034 188",
    "linkedin": "linkedin.com/in/lianachalabyan"
};
document.getElementById("flname").innerText = userJSON.flname;
document.getElementById("email").innerText = userJSON.email;
document.getElementById("phone").innerText = userJSON.phone;
document.getElementById("linkedin").innerText = userJSON.linkedin;

// ________Homework lesson 8________ 

// Change selectors for elements in your pages with JQuery selector

$("#subject").text("Homeworks");
$("#subject").css("font-size", "45px");

// Try everything from this link jQuery Examples
// Use some of them in your page(s)

// $("#mybutton").show();
$("h2").fadeOut(1000); 

// Fade in an element
$("h2").fadeIn(1000);

$("p").dblclick(function(){
    $(this).hide();
  });

$("#fahrenheit").mouseleave(function(){
    alert("You now leave input field!");
  });

// ________conditions (if, else if, switch)________ 

let Speed = 80
if (Speed >= 100) {
  console.log("You are over speeding");
} else if (Speed >= 90) {
  console.log("You speed within the limits");
} else if (Speed >= 70) {
  console.log("Please move to the second line");
} else if (Speed >= 60) {
  console.log("Your car is too slow");
} else {
  console.log("Is everything ok?");
}

let proficiencyLevel = 'intermediate'; // 'beginner', 'intermediate', 'advanced'
let learningGoal = 'vocabulary'; // 'vocabulary', 'grammar'
if (proficiencyLevel === 'beginner') {
  switch (learningGoal) {
      case 'vocabulary':
          console.log("Learn common words and use flashcards.");
          break;
      case 'grammar':
          console.log("Study basic grammar rules and practice simple sentences.");
          break;
      default:
          console.log("Explore beginner-level learning resources.");
  }
} else if (proficiencyLevel === 'intermediate') {
  switch (learningGoal) {
      case 'vocabulary':
          console.log("Learn more specific vocabulary and use it in sentences.");
          break;
      case 'grammar':
          console.log("Work on more complex grammar and practice writing.");
          break;
      default:
          console.log("Use intermediate-level study materials and read books.");
  }
} else if (proficiencyLevel === 'advanced') {
  switch (learningGoal) {
      case 'vocabulary':
          console.log("Study advanced words and idioms.");
          break;
      case 'grammar':
          console.log("Write essay useing advanced grammar.");
          break;
      default:
          console.log("Access advanced learning resources.");
  }
} else {
  console.log("Invalid proficiency level.");
}


// __________All types of loops (for, for In, for of, while, do while)_______

// ___for In___
let students_mark = {
  Alice: 97,
  Bob:85,
  Carol: 74,
  Nick:53
};

for( let i in students_mark) {
  console.log(i, students_mark[i]);
}

// _____for off_____

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum_num = 0;

for (let num of number) {
    sum_num += num;
}

console.log(sum_num); 

// ____while____
let count1 = 1;


while (count1 <= 5) {
    console.log(count1);
    count1++;
}

// ____while do____
let count2 = 1;

do {
    console.log(count2);
    count2++;
} while (count2 <= 5);