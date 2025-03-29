import { expect, it, describe } from "vitest";
import calculator from "../utils/calculator";


it('True Test', () => {
    expect(true).toBe(true); // Jest expect
    expect(true).to.be.true; // chai expect
});

// Tripple A Pattern
describe('Sum', () => {
    it('Should return positive value when adding positive numbers', () => {
        // Arrange
        const firstNumber = 1;
        const secondNumber = 2;
        const expectedResult = 3;

        // Act
        const actualResult = calculator.sum(firstNumber, secondNumber);

        // Assert
        expect(actualResult).toEqual(expectedResult); // Jest like expect
        expect(actualResult).to.equal(expectedResult); // Chai like expect
    });

    it('Should return negative number when adding negative numbers', () => {
        expect(calculator.sum(-1, -2)).toBe(-3);
    });
});

describe('Multiply', () => {
    it('Should return positive number when multiplying negative numbers', () => {
        expect(calculator.multiply(-1, -2)).toBe(2);
    })
});
