// 1. Create an empty object called dog
const dog = {};

// 2. Print the dog object on the console
console.log(dog);

// 3. Add properties to the dog object
dog.name = 'Simba';
dog.legs = 4;
dog.color = 'black and white';
dog.age = 3;
dog.bark = function() {
    return 'Woof Woof';
};

// 4. Get values from the dog object
console.log(dog.name); 
console.log(dog.legs); 
console.log(dog.color); 
console.log(dog.age); 
console.log(dog.bark()); 

// 5. Set new properties for the dog object
dog.breed = 'Billy';
dog.getDogInfo = function() {
    return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}`;
};

console.log(dog.getDogInfo()); 

// Exercises: Level 2
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

// 1. Find the person with the most skills
let maxSkillsUser = '';
let maxSkillsCount = 0;

for (const user in users) {
    if (users[user].skills.length > maxSkillsCount) {
        maxSkillsCount = users[user].skills.length;
        maxSkillsUser = user;
    }
}

console.log(`User with most skills is ${maxSkillsUser} with ${maxSkillsCount} skills.`); // User with most skills is Asab with 8 skills.

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
  let loggedInCount = 0;
  let highPointsCount = 0;

for (const user in users) {
    if (users[user].isLoggedIn) {
        loggedInCount++;
    }
    if (users[user].points >= 50) {
        highPointsCount++;
    }
}

console.log(`Logged in users count: ${loggedInCount}`); 
console.log(`Users with >= 50 points count: ${highPointsCount}`); 

// 3. Find people who are MERN stack developer from the users object
    const mernStackDevelopers = [];

for (const user in users) {
    if (users[user].skills.includes('MongoDB') && 
        users[user].skills.includes('Express') && 
        users[user].skills.includes('React') && 
        users[user].skills.includes('Node')) {
            mernStackDevelopers.push(user);
    }
}

console.log(`MERN stack developers are: ${mernStackDevelopers.join(', ')}`); 

// 4. Set your name in the users object without modifying the original users object
const newUser = {
    ...users,
    Kamola: {
        email: 'kamola@gmail.com',
        skills: [],
        age: 100,
        isLoggedIn: false,
        points: 40
    }
};

console.log(newUser);

// 5. Get all keys or properties of users object
console.log(Object.keys(users)); 

// 6. Get all values of users object
console.log(Object.values(users)); 

// 7. Using a countries object to print country information (example)
   const countries = {
    USA: { capital: 'Washington D.C.', population: 331000000, languages: ['English'] },
    Canada: { capital: 'Ottawa', population: 37700000, languages: ['English', 'French'] }
};

for (const country in countries) {
    console.log(`Country: ${country}, Capital: ${countries[country].capital}, Population: ${countries[country].population}, Languages: ${countries[country].languages.join(', ')}`);
}
