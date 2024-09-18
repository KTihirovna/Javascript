// 1. Declare an empty array
let emptyArray = [];

// 2. Declare an array with more than 5 elements
let numbersArray = [1, 2, 3, 4, 5, 6, 7];

// 3. Find the length of your array
console.log(numbersArray.length); // Output: 7

// 4. Get the first item, middle item, and last item of the array
let firstItem = numbersArray[0];
let middleItem = numbersArray[3];
let lastItem = numbersArray[numbersArray.length - 1];

console.log(firstItem); // Output: 1
console.log(middleItem); // Output: 4
console.log(lastItem); // Output: 7

// 5. Declare an array called mixedDataTypes
let mixedDataTypes = [100, "Kamola", true, null, undefined, { country: "Uzbekistan" }];
console.log(mixedDataTypes.length); // Output: 6

// 6. Declare an array variable name itCompanies
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length); // Output: 7

// 9. Print first, middle and last company
console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length - 1]);

// 10. Print out each company
itCompanies.forEach(company => console.log(company));

// 11. Change each company name to uppercase and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()));

// 12. Print the array as a sentence
console.log(`${itCompanies.join(', ')} are big IT companies.`);

// 13. Check if a certain company exists in the itCompanies array
let companyToCheck = 'Google';
if (itCompanies.includes(companyToCheck)) {
    console.log(`${companyToCheck} exists.`);
} else {
    console.log(`${companyToCheck} not found.`);
}

// 14. Filter out companies which have more than one 'o' without the filter method
let filteredCompanies = []; 
for (let company of itCompanies) {
    if ((company.match(/o/g) || []).length <= 1) {
        filteredCompanies.push(company);
    }
}
console.log(filteredCompanies);

// 15. Sort the array using sort() method
console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// 19. Slice out the middle IT company or companies from the array
let middleIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
    console.log(itCompanies.slice(middleIndex - 1, middleIndex + 1));
} else {
    console.log(itCompanies[middleIndex]);
}

// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
middleIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
    itCompanies.splice(middleIndex - 1, 2);
} else {
    itCompanies.splice(middleIndex, 1);
}
console.log(itCompanies);

// 22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// 23. Remove all IT companies
itCompanies = [];
console.log(itCompanies);

// Exercise: Level 2
import countries from './countries.js';
import webTechs from './web_techs.js';

// Remove punctuation and count words
let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = txt.replace(/[.,]/g).split(" ");
console.log(words);
console.log(words.length); 

// Shopping cart operations
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat');
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar');
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1); 
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'; 

// Check if Ethiopia exists in countries array
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

// Check if Sass exists in webTechs array
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
}
console.log(webTechs);

// Concatenate frontEnd and backEnd arrays
const frontEndDev = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEndDev = ['Node','Express', 'MongoDB'];
const fullStack = frontEndDev.concat(backEndDev);
console.log(fullStack);

// Level 3
// Ages array operations
const diffAges = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find min and max age
diffAges.sort();
const minAge = diffAges[0];
const maxAge = diffAges[diffAges.length - 1];

console.log(`Min age: ${minAge}, Max age: ${maxAge}`);

// Find median age
const medianAge = diffAges.length % 2 === 0 ? 
    (diffAges[diffAges.length / 2 - 1] + diffAges[diffAges.length / 2]) / 2 : 
    diffAges[Math.floor(diffAges.length / 2)];

console.log(`Median age: ${medianAge}`);

// Find average age
const averageAge = diffAges.reduce((sum, age) => sum + age) / diffAges.length;
console.log(`Average age: ${averageAge}`);

// Find range of ages
const ageRange = maxAge - minAge;
console.log(`Age range: ${ageRange}`);

// Compare min - average and max - average using abs()
const minAvgDiff = Math.abs(minAge - averageAge);
const maxAvgDiff = Math.abs(maxAge - averageAge);

console.log(`Min - Average: ${minAvgDiff}, Max - Average: ${maxAvgDiff}`);

// Slice first ten countries from countries array (assuming countries is defined)
const firstTenCountries = countries.slice(0, 10);
console.log(firstTenCountries);

// Find middle country(ies)
const middleCountries = countries.length % 2 === 0 ? 
    countries.slice(countries.length / 2 - 1, countries.length / 2 + 1) : 
    countries[Math.floor(countries.length / 2)];

console.log(middleCountries);

// Divide countries into two equal arrays if even
const midIndex = Math.ceil(countries.length / 2);
const firstHalfCountries = countries.slice(0, midIndex);
const secondHalfCountries = countries.slice(midIndex);

console.log(firstHalfCountries);
console.log(secondHalfCountries);
