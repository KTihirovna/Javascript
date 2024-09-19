// 1. Declare a function fullName and it print out your full name.
function fullName() {
    let last_name = 'Makhramkulova'
    let first_name = 'Kamola'
    let space = " "
    return last_name + space + first_name;
    }
    console.log(fullName());

//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.function fullNameWithParams(firstName, lastName) {
    function fullName() {
        let last_name = 'Makhramkulova'
        let first_name = 'Kamola'
        let space = " "
        return last_name + space + first_name;
        }
        console.log(fullName());

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
 function addNumbers(a = 10, b = 39) {
    
    return a + b;
}
console.log(addNumbers())

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
    
    let length = 28
    let width = 5
function areaOfRectangle() {
    
    return length * width;
}
console.log(areaOfRectangle())

// 5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle() {
    return 2 * (length + width);
}
console.log(perimeterOfRectangle())

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
let height = 10
function volumeOfRectPrism() {
    return length * width * height;
}
console.log(volumeOfRectPrism())

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
let radius = 46
function areaOfCircle() {
    return Math.PI * radius * radius;
}
console.log(areaOfCircle())

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle() {
    return 2 * Math.PI * radius;
}
console.log(circumOfCircle())

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass = 10, volume = 27) {
    return mass / volume;
}
console.log(density())

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed(distance = 8, time = 7) {
    return distance / time;
}
console.log(speed())

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass = 40, gravity = 30) {
    return mass * gravity;
}
console.log(weight())

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(celsius = 8) {
    return (celsius * 9/5) + 32;
}
console.log(convertCelsiusToFahrenheit())

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function calculateBMI(weight, height) {
        const bmi = weight / (height * height);
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
}
console.log(calculateBMI( 60, 160));

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
    
    function checkSeason(month) {
    if ([12, 1, 2].includes(month)) return "Winter";
    if ([3, 4, 5].includes(month)) return "Spring";
    if ([6, 7, 8].includes(month)) return "Summer";
    if ([9, 10, 11].includes(month)) return "Autumn";
    return "Invalid month";
}
console.log(checkSeason(7))

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
    
    function findMax(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}
console.log(findMax(5, 8, -1))
// Optional: // Math.min returns its lowest argument. Write a function findMin that takes three arguments and returns their minimum with out using Math.min method.
    function findMin(a, b, c) {
    let min = a;
    if (b < min) min = b;
    if (c < min) min = c;
    return min;
    }
    console.log(findMin(2,-4, 0))

// Level 2. 
// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
    function solveLinEquation(a, b, c) {
    if (a === 0 && b === 0) return null; 
    if (a === 0) return -c / b; 
    if (b === 0) return -c / a; 
    return { x: -c / a, y: -c / b }; 
}
    console.log(solveLinEquation(5, 7, 9))

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
    
    function solveQuadEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) return {}; 
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return discriminant === 0 ? { root: root1 } : { root1, root2 };
}
console.log(solveQuadEquation(10, 50, 49))
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
    function printArray(arr) {
    arr.forEach(value => console.log(value));
}


// 5. Declare a function name swapValues. This function swaps value of x to y.
    function swapValues(x, y) {
    [x, y] = [y, x];
    console.log(`x => ${x}, y => ${y}`);
}

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
    function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
    function capitalizeArray(arr) {
    return arr.map(item => item.toUpperCase());
}
console.log(capitalizeArray(['Kamola']))

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
    function addItem(arr, item) {
    arr.push(item);
    return arr;
}
console.log(addItem(['Kamola'], 'Makhramkulova'))

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
    function removeItem(arr, index) {
    arr.splice(index, 1);
    return arr;
}
console.log([7], 1)

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
    function sumOfNumbers(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(sumOfNumbers(9))

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
    function sumOfOdds(n){
        let total = 0;
        for (let i = 1; i <= n; i++){
            if (i % 2 !==0){
            total +=i;
            }
        }
        return total;
    }
    console.log(sumOfOdds(39))

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
    function sumOfEven(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfEven(90))

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
    function evensAndOdds(n) {
    let odds = 0;
    let evens = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }
    console.log(`The number of odds are ${odds}.`);
    console.log(`The number of evens are ${evens}.`);
}

// 14. Write a function which takes any number of arguments and return the sum of the arguments
    function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1,6,9,3,6,5))