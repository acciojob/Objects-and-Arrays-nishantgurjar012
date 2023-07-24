// Given array and object
let players = ['John', 'Mike', 'Sarah', 'Emily'];
let person = {
  name: 'Alice',
  age: 30,
  country: 'USA'
};

// Create variables as requested
let team = players; // team now references the original 'players' array
let team1 = players.slice(); // team1 is a shallow copy of the 'players' array
let cap1 = { ...person }; // cap1 is a shallow copy of the 'person' object using the spread operator

// Modifying the 'players' array won't affect 'team' because 'team' is a reference to the original array.
players.push('Tom');

console.log(players); // Output: ['John', 'Mike', 'Sarah', 'Emily', 'Tom']
console.log(team);    // Output: ['John', 'Mike', 'Sarah', 'Emily', 'Tom']

// Modifying the 'players' array won't affect 'team1' because 'team1' is a shallow copy of the original array.
players.pop();

console.log(players); // Output: ['John', 'Mike', 'Sarah', 'Emily']
console.log(team1);   // Output: ['John', 'Mike', 'Sarah', 'Emily', 'Tom']

// Modifying the 'person' object won't affect 'cap1' because 'cap1' is a shallow copy of the original object.
person.age = 31;

console.log(person); // Output: { name: 'Alice', age: 31, country: 'USA' }
console.log(cap1);   // Output: { name: 'Alice', age: 30, country: 'USA' }
