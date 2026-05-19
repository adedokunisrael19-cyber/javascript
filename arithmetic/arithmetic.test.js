const {add, subtract} = require('./arithmetic')

test('test addition o two poaitive numbers', () => {
    let firstNumber =23;
    let secondnumber =20;

    expect(add(firstNumber, secondnumber)).toBe(43)

})

test("test that addition of two negative numbers", () => {
    let firstNumber =-23;
    let secondnumber =-20;
expect(add(firstNumber, secondnumber)).toBe(-43)

})

test("test that test your brain", () => {
       let firstNumber =-23;
       let secondnumber =-20;    

expect(subtract(firstNumber, secondnumber).toBe(3))

})
