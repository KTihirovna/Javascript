// Given arrays
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
  
  // Iterate from 0 to 10 using for loop
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  
  // Iterate from 0 to 10 using while loop
  let j = 0;
  while (j <= 10) {
    console.log(j);
    j++;
  }
  
  // Iterate from 0 to 10 using do while loop
  let k = 0;
  do {
    console.log(k);
    k++;
  } while (k <= 10);
  
  // Iterate from 10 to 0 using for loop
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
  
  // Iterate from 10 to 0 using while loop
  let l = 10;
  while (l >= 0) {
    console.log(l);
    l--;
  }
  
  // Iterate from 10 to 0 using do while loop
  let m = 10;
  do {
    console.log(m);
    m--;
  } while (m >= 0);
  
  // Iterate from 0 to n using for loop
  let n = 9; 
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  
  // Write a loop that makes the following pattern using console.log():
 /* #
    ##
    ###
    ####
    #####
    ######
    #######  */
  for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
  }
  
  //5. Use loop to print the following pattern:
  /**
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
   */
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
  }
  
  //6. Using loop print the following pattern
  /*
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000 */

  console.log('i\ti^2\ti^3');
  
  for (let i = 0; i <= 10; i++) {
    console.log(`${i}\t${i * i}\t${i * i * i}`);
  }
  
  // Use for loop to iterate from 0 to 100 and print only even numbers
  for (let i = 0; i <= 100; i += 2) {
    console.log(i);
  }
  
  // Use for loop to iterate from 0 to 100 and print only odd numbers
  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
  }
  

  
  // Use for loop to iterate from 0 to 100 and print the sum of all numbers.
  let sumAll = 0;
  for (let i = 0; i <= 100; i++) {
      sumAll += i;
  }
  console.log(`The sum of all numbers from 0 to 100 is ${sumAll}.`);
  //The sum of all numbers from 0 to 100 is 5050.

  // Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
  let sumEvens = 0;
  let sumOdds = 0;
  
  for (let i = 0; i <= 100; i++) {
      if (i % 2 === 0) {
          sumEvens += i;
      } else {
          sumOdds += i;
      }
  }
  
  console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);
  
  // Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
  console.log([sumEvens, sumOdds]);
  
  // Develop a small script which generate array of 5 random numbers
  function generateRandomNumbers(count) {
      const randomNumbers = [];
      for (let i = 0; i < count; i++) {
          randomNumbers.push(Math.floor(Math.random() * 100));
      }
      return randomNumbers;
  }
  console.log(generateRandomNumbers(5));
  
  // Level 2
 
  
  
  // Using the above countries array, create the following new array.
  //  //["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
 let countriesNew = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
  const upperCaseCountries = countriesNew.map(countriesNew => countriesNew.toUpperCase());
  console.log(upperCaseCountries);
  
  // Using the above countries array, create an array for countries length
  const countriesLength = countriesNew.map(countriesNew => countriesNew.length);
  console.log(countriesLength);
  
  // Use the countries array to create the following array of arrays:
  /**
   *   [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
   */
  const countriesData = countriesNew.map(countriesNew => [
      countriesNew,
      countriesNew.slice(0,3).toUpperCase(),
      countriesNew.length
  ]);
  console.log(countriesData);
  
  // In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
  // ['Finland','Ireland', 'Iceland']

  const countriesWithLand = countriesNew.filter(countriesNew => countriesNew.includes('land'));
  if (countriesWithLand.length > 0) {
      console.log(countriesWithLand);
  } else {
      console.log('All these countries are without land.');
  }
  
  // In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
  // ['Albania', 'Bolivia','Ethiopia']
  const countriesEndingWithIA = countries.filter(country => country.endsWith('ia'));
  if (countriesEndingWithIA.length > 0) {
      console.log(countriesEndingWithIA);
  } else {
      console.log('These are countries ends without ia.');
  }
  
  // Using the above countries array, find the country containing only 5 characters.
  const fiveCharacterCountries = countries.filter(country => country.length === 5);
  console.log(fiveCharacterCountries);
  
  // Find the longest word in the webTechs array
  const longestWebTech = webTechs.reduce((a, b) => a.length > b.length ? a : b);
  console.log(longestWebTech);
  
  // Use the webTechs array to create the following array of arrays:
  const webTechsData = webTechs.map(tech => [tech, tech.length]);
  console.log(webTechsData);

  // This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
  const fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.reverse()
    console.log(fruits)
    
    // Print all the elements of array as shown below.
    /**
     *   const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
     */
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  console.log(`fullStack.toUpperCase(), ${fullStack}\t`)