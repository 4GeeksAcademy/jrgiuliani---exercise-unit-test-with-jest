// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 154.67289 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(3.5);
    // If 1 dollar is  154.67289 Yen, then 3.5 dollars should be (3.5 * 154.67289)
    const expected = 3.5 *(165.5/1.07); 
    expect(fromDollarToYen(3.5)).toBe(expected); 
})


test("One Yen should be 0.0052567976  Pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(3.5);
    // If 1 Yen is  0.0052567976 Pound, then 3.5 Yen should be (3.5 * 0.0052567676)
    const expected = 3.5 *(0.87/165.5); 
    expect(fromYenToPound(3.5)).toBe(0.018398791540785497); 
})

