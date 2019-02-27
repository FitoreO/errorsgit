const functions = require("./errors");

describe("function emptyList", () => {
    test('returns an empty list', () => {
        expect(functions.emptyList()).toEqual([]);
    });
    test("returns a zero", () => {
        expect(functions.emptyList()).toHaveLength(0);
    });
    test("to have an empty string", () => {
        expect(functions.emptyList()).not.toBe("");
    });
});

describe("function totalProductCost", () => {
    test('returns a zero', () => {
        let products = [];
        expect(functions.totalProductCost(products)).toBe(0);
    });
    test('return 15 from list', () => {

        let newproducts = [
            { name: "Lök", price: 15 }
        ];

        //ska returnera 15 på en lista med ett föremål som kostar 15.
        expect(functions.totalProductCost(newproducts)).toBe(15);
    });
    test("return three values", () => {
        let newproducts = [
            { name: "Banan", price: 10 },
            { name: "Mango", price: 30 },
            { name: "Lök", price: 15 }
        ];
        expect(functions.totalProductCost(newproducts)).toBe(55);
    });
});

describe("function addProduct", () => {

})

// describe("my total costs", () => {
//     const totalProductCost = {
//     }
//     test('', () => {
//     })
// })

//i 1an så har du duplicerat första objektet och överfört dess värden. i 2an så har du skapat två olika objekt med exakt samma värden
//Compared values have no visual difference. Note that you are testing for equality with the stricter `toBe` matcher using `Object.is`. For deep equality only, use `toEqual` instead.
