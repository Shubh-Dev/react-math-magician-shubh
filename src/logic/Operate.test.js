import React from "react";
import operate from "./Operate";

describe('Arithmatic operation testing', () => {
    test('addition operator test', () => {
        const num1 = 100;
        const num2 = 200;
        const operation = '+';
        expect(operate(num1, num2, operation)).toEqual('300');
    });

    test('substruction operator test', () => {
        const num1 = 100;
        const num2 = 200;
        const operation = '-';
        expect(operate(num1, num2, operation)).toEqual('-100');
    })

    test('Division operation testing', () => {
        const num1 = 100;
        const num2 = 20;
        const operation = "÷";

        expect(operate(num1, num2, operation)).toEqual('5');
    })

    test('Multiplication operation testing', () => {
        const num1 = 50;
        const num2 = 40;
        const operation = 'x';

        expect(operate(num1, num2, operation)).toEqual('2000');
    })

    test('modulus operation test', () => {
        const num1 = 20;
        const num2 = 8;
        const operation = '%';

        expect(operate(num1, num2, operation)).toEqual('4')
    })
});

