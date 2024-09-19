//▎Exercises: Level 1

//1. Declare variables and check types:
let FirstName = 'Kamola';
let LastName = 'Makhramkulova';
let country = 'Uzbekistan';
let city = 'Nurafshan';
const Age = 200;
let isMarried = true;
let year = 2024;

console.log(typeof FirstName); // string
console.log(typeof LastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof Age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number


//2. Check if type of '10' is equal to 10:
   console.log(typeof '10' === typeof 10); // false


// 3. Check if parseInt('9.8') is equal to 10:
   console.log(parseInt('9.8') === 10); // false


// 4.  truthy values:
   console.log(5); // true
console.log('JavaScript'); // true
console.log([]); // true 


//5.  falsy values:
   console.log(0); // false
console.log(null); // false
console.log(''); // false 
console.log(NaN); // false


// 6. Comparison expressions:
- 4 > 3 // true
- 4 >= 3 // true
- 4 < 3 // false
- 4 <= 3 // false
- 4 == 4 // true
- 4 === 4 // true
- 4 != 4 // false
- 4 !== 4 // false
- 4 != '4' // false
- 4 == '4' // true
- 4 === '4' // false

//7. Length of "python" and "jargon":
const pythonLength = 'python'.length; 
const jargonLength = 'jargon'.length; 
console.log(pythonLength === jargonLength); // true 


//8. Expressions to evaluate:
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true 
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true


// 9. Check for 'on' in "dragon" and "python":
let py = "python"
let dr = "dragon"
console.log(py.includes('on')); // true
console.log(dr.includes ('on')); // true


// 10. Date object activities:
const today = new Date();
 console.log(today.getFullYear()); 
 console.log(today.getMonth() + 1); 
 console.log(today.getDate()); 
 console.log(today.getDay()); 
 console.log(today.getHours()); 
 console.log(today.getMinutes()); 
 console.log(today.getTime());
 
 

//Exercises: Level 2

// 1. Area of a triangle:
 const base = parseFloat(prompt("Enter base:"));
 const height = parseFloat(prompt("Enter height:"));

 const area = 0.5 * base * height;
 alert(`The area of the triangle is ${area}`)

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
 const sideA = prompt("Enter side a:");
 const sideB = prompt("Enter side b:");
 const sideC = prompt("Enter side c:");
 const perimeter = Number(sideA) + Number(sideB) + Number(sideC);
 alert(`The perimeter of the triangle is ${perimeter}`);
 

//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
 const length = prompt("Enter length:");
 const width = prompt("Enter width:");
 const areaRectangle = length * width;
 const perimeterRectangle = 2 * (Number(length) + Number(width));
 alert(`Area: ${areaRectangle}, Perimeter: ${perimeterRectangle}`);
 

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
 const radius = prompt("Enter radius:");
 const pi = Math.PI; // More accurate than hardcoding pi as 3.14
 const areaCircle = pi * radius * radius;

 const circumferenceCircle = 2 * pi * radius;
 alert(`Area: ${areaCircle}, Circumference: ${circumferenceCircle}`);
 



// 8. Weekly earnings calculation:
 const hoursWorked = prompt("Enter hours:");
 const ratePerHour = prompt("Enter rate per hour:");
 const weeklyEarnings = hoursWorked * ratePerHour;
 alert(`Your weekly earning is ${weeklyEarnings}`);
 
// 9 If the length of your name is greater than 7 say, your name is long else say your name is short.

const fullName = FirstName + " " + LastName;

if (fullName.length > 7) {
    console.log("My name is long.");
} else {
    console.log("My name is short.");
}

// Task 10: Compare first name length and family name length
if (FirstName.length > LastName.length) {
    console.log("Your first name is longer than your lastname.");
} else if (FirstName.length < LastName.length) {
    console.log("Your lastname is longer than your first name.");
} else {
    console.log("Your first name and lastname are of equal length.");
}

// 11. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
  let myAge = 250;
  let yourAge = 25;
  alert(`I am ${myAge - yourAge} years older than you.`);
  

// 12. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/*Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.*/
  // Get the current year
const currentYear = new Date().getFullYear();

// Prompt the user to enter their birth year
const birthYear = prompt("Enter your birth year:");

// Calculate the user's age
const age = currentYear - birthYear;

// Check if the user is 18 or older
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
} else {
    const yearsToWait = 18 - age;
    console.log(`You are ${age}. You need to wait ${yearsToWait} more years to drive.`);
}


//13. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

 const yearsLived = prompt("Enter number of years you live:");
 const secondsLived = yearsLived * 365 * 24 * 60 * 60; 
 alert(`You lived ${secondsLived} seconds.`);

         
  

