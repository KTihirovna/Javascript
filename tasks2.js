// Execises:
// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

// 2. Print the string on the browser console using console.log()
    console.log(challenge)

// 3. Print the length of the string on the browser console using console.log()
    console.log(challenge.length)

// 4. Change all the string characters to capital letters using toUpperCase() method
    console.log(challenge.toUpperCase())

// 5. Change all the string characters to lowercase letters using toLowerCase() method
    console.log(challenge.toLocaleLowerCase())

// 6. Cut (slice) out the first word of the string using substr() or substring() method
    let lastNameOne = 'Burhonov'

    console.log(lastNameOne.substr(3,5))
    console.log(lastNameOne.substring(0,6))

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
    console.log(challenge.substr(3))

// 8. Check if the string contains a word Script using includes() method
    console.log(challenge.includes('Script'))

// 9. Split the string into an array using split() method
    console.log(challenge.split())
    
// 10. Split the string 30 Days Of JavaScript at the space using split() method
    console.log(challenge.split(' '))

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
    let giantCompany = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
    console.log(giantCompany.split(', '))

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
    console.log(challenge.replace('JavaScript','Python'))

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
    console.log(challenge.charAt(15))

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
    console.log(challenge.charCodeAt('J'))

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
    console.log(challenge.indexOf('30'))
    
// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
    console.log(challenge.lastIndexOf('Javascript'))

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    let rule = 'You cannot end a sentence with because because because is a conjunction'

    console.log(rule.indexOf('because'))

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    console.log(rule.lastIndexOf("you"))

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    console.log(rule.indexOf('because'))

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
    console.log(challenge.trim())

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
    console.log(challenge.startsWith('30'))

// 22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true
    console.log(challenge.endsWith('JavaScript'))

// 23 Use match() method to find all the a’s in 30 Days Of JavaScript
    let pattern = /a/gi

    console.log(challenge.match(pattern))

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
    let joint = '30 Days of'

    console.log(joint.concat('JavaScript'))

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
    console.log(challenge.repeat(2 ));

//  Exercise: Level 2

// 1. Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
   let quote = "'There is no exercise better for the heart than reaching down and lifting people up.'\n by John Holmes teaches us to help one another."

   console.log(quote);

   // 2. Using console.log() print out the following quote by Mother Teresa:"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    let quoteMotherTeresa = "\"Love is not patronizing and charity isn\'t about pity, it is about love.\n Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\""
   
   console.log(quoteMotherTeresa);
    // 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
    let num = '10'

    console.log(num ===10);

    let numInt = +num
    console.log(numInt);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
    let float = '9.8'

    console.log(float===10);

    let numberInt = parseInt(float)

    console.log(numberInt+1);

// 7. Check if 'on' is found in both python and jargon
    let python = 'python'
    let jargon = 'jargon'

    console.log(python.includes('on'));
    console.log(jargon.includes('on'));

// 8. I hope this course is not full of jargon. Check if jargon is in the sentence.
    let sentenceTwo = 'I hope this course is not full of jargon'

    console.log(sentenceTwo.includes('jargon'));

// 9. Generate a random number between 0 and 100 inclusively.
    let randomNumber = Math.random(0-100)
    let numBtnZeroAndHundred = randomNumber*99
    console.log(numBtnZeroAndHundred);

// 10. Generate a random number between 50 and 100 inclusively.
function getRandomNumberFifty() {
    return Math.floor(Math.random() * 101);
}

const randomNumber5 = getRandomNumberFifty();
console.log(randomNumber5);

// 11. Generate a random number between 0 and 255 inclusively.
    function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

const randomNum = getRandomNumber();
console.log(randomNum);


/* 13. Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/


// 14. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
    console.log(rule.substr(31,24))

/* Exercises: Level 3 */
//1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
    const loveTwo = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
    const loveCount = (loveTwo.match(/love/gi) || []).length; // Use /gi to match case-insensitively
    console.log(loveCount); // Output: 3

    
//2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    const sentenceBecause = 'You cannot end a sentence with because because because is a conjunction';
    const becauseCount = (sentenceBecause.match(/because/gi) || []).length; // Use /gi to match case-insensitively
    console.log(becauseCount); // Output: 3
    
//3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

    // 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

    const incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const monthlyIncome = incomeText.match(/\d+/g).map(Number);

// Calculate total annual income
const totalAnnualIncome = (monthlyIncome[0] * 12) + monthlyIncome[1]; 
console.log(totalAnnualIncome); 
