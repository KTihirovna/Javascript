//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/*Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.*/

let userAge = prompt("Enter your age:");

if (userAge >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsLeft = 18 - userAge;
    console.log(`You are left with ${yearsLeft} years to drive.`);
}

// 2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

/*Enter your age: 30
You are 5 years older than me.*/


let myAge1 = 25; 
let yourAge1 = prompt("Enter your age:");

 
if (yourAge1 > myAge1) {
    console.log(`You are ${yourAge1 - myAge1} years older than me.`);
} else if (yourAge1 < myAge1) {
    console.log(`I am ${myAge1 - yourAge1} years older than you.`);
} else {
    console.log("the same age.");
}

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to way 
 //using if else
 //ternary operator.
 let a1 = 4;
 let b1 = 3;

if (a1 > b1) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}
console.log(a1 > b1 ? 'a is greater than b' : 'a is less than b');

// ternary version
console.log(a > b ? 'a is greater than b' : 'a is less than b');

 
 // 4 is greater than 3
    console.log()
//5. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

/*Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.*/

let number = prompt("Enter a number:");

if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is an odd number.`);
}

//Exercises: Level 2
//Write a code which can give grades to students according to theirs scores:
/*80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/
let score = prompt("Enter your score:");

if (score >= 80 && score <= 100) {
    console.log("A");
} else if (score >= 70 && score < 80) {
    console.log("B");
} else if (score >= 60 && score < 70) {
    console.log("C");
} else if (score >= 50 && score < 60) {
    console.log("D");
} else if (score >= 0 && score < 50) {
    console.log("F");
} else {
    console.log("Invalid score.");
}

//2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
/*September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let month = prompt("Enter a month:");

switch(month.toLowerCase()) {
    case 'september':
    case 'october':
    case 'november':
        console.log("The season is Autumn.");
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log("The season is Winter.");
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log("The season is Spring.");
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log("The season is Summer.");
        break;
    default:
        console.log("Invalid month.");
}

//3. Check if a day is weekend day or a working day. Your script will take day as an input.
    /*What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.*/

    let day = prompt("What is the day today?");

    switch(day.toLocaleLowerCase()){
        case 'saturday':
        case 'sunday':
            console.log(`${day}is weekend`);
            break;
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
            console.log(`${day}is a working dey`);
            break;
        default:
            console.log('Invalid day');
    }


//Exercises: Level 3
/*Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.*/

  let monthDays = prompt("Enter a month:");

switch(monthDays.toLowerCase()) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${monthDays} has 31 days.`);
        break;
    case 'february':
        console.log(`${monthDays} has 28 days.`);
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${monthDays} has 30 days.`);
        break;
    default:
        console.log("Invalid month.");
}

//Write a program which tells the number of days in a month, now consider leap year.