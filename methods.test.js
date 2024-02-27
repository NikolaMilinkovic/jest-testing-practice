const { capitalize, reverseString, calculator, caesarCipher, analyzeObject } = require('./methods.js');

it('Capitalize first letter', () => {
    expect(capitalize('testing')).toBe('Testing')
    expect(capitalize('hello')).toBe('Hello')
})

it('Reverse string', () => {
    expect(reverseString('testing')).toBe('gnitset');
    expect(reverseString('hello')).toBe('olleh');
})
// add, subtract, divide, and multiply.
describe('Calculator methods', () => {
    it('Calculator add method', () => {
        expect(calculator.add(10,10)).toBe(20);
        expect(calculator.add(10,15)).toBe(25);
    })
    it('Calculator subtract method', () => {
        expect(calculator.subtract(10,10)).toBe(0);
        expect(calculator.subtract(10,15)).toBe(-5);
    })
    it('Calculator divide method', () => {
        expect(calculator.divide(10,10)).toBe(1);
        expect(calculator.divide(64,8)).toBe(8);
    })
    it('Calculator multiply method', () => {
        expect(calculator.multiply(10,10)).toBe(100);
        expect(calculator.multiply(10,15)).toBe(150);
    })
})

describe('Caesar cihper', () => {
    it('Single word lowercase', () => {
        expect(caesarCipher('confidental', 3)).toBe('frqilghqwdo');
        expect(caesarCipher('confidental', 4)).toBe('gsrjmhirxep');
        expect(caesarCipher('confidental', 5)).toBe('htsknijsyfq');
        expect(caesarCipher('confidental', 6)).toBe('iutlojktzgr');
        expect(caesarCipher('blazing', 6)).toBe('hrgfotm');
    })
    it('Single word uppercase', () => {
        expect(caesarCipher('BLAZING', 6)).toBe('HRGFOTM');
        expect(caesarCipher('CONFIDENTAL', 6)).toBe('IUTLOJKTZGR');
        expect(caesarCipher('ZOOMA', 3)).toBe('CRRPD');
    })
    it('Single word mixed', () => {
        expect(caesarCipher('ConFiDenTal', 3)).toBe('FrqIlGhqWdo');
        expect(caesarCipher('BlAzIng', 3)).toBe('EoDcLqj');
        expect(caesarCipher('ZooMeRs', 6)).toBe('FuuSkXy');
    })
    it('Multiple words', () => {
        expect(caesarCipher('Confidental files', 3)).toBe('Frqilghqwdo ilohv');
        expect(caesarCipher('multiple words in here', 3)).toBe('pxowlsoh zrugv lq khuh');
        expect(caesarCipher('multiple words in here', 6)).toBe('sarzovrk cuxjy ot nkxk');
    })
    it('Multiple words with mixed casing', () => {
        expect(caesarCipher('ConFiDental FilezZ', 3)).toBe('FrqIlGhqwdo IlohcC');
        expect(caesarCipher('TesTinGZ ThiS JeSt ThinGy', 3)).toBe('WhvWlqJC WklV MhVw WklqJb');
        expect(caesarCipher('TesTinGZ ThiS JeSt ThinGy', 6)).toBe('ZkyZotMF ZnoY PkYz ZnotMe');
    })
    it('Multiple words with mixed casing and punctuation', () => {
        expect(caesarCipher('ConFiDental# FilezZ!', 3)).toBe('FrqIlGhqwdo# IlohcC!');
        expect(caesarCipher('TesTinGZ@ ThiS JeSt ThinGy?', 3)).toBe('WhvWlqJC@ WklV MhVw WklqJb?');
        expect(caesarCipher('TesTinGZ, ThiS JeSt ThinGy.', 6)).toBe('ZkyZotMF, ZnoY PkYz ZnotMe.');
    })
})

// const object = analyzeArray([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };

describe('Analyze array methods', () => {
    it('Returned value is an object', () => {
        expect(analyzeObject && typeof analyzeObject === 'object').toBe(true)
    })
    it('Average value is correctly computed', () => {
        expect(analyzeObject.average).toBe(4)
    })
    it('Min value is correctly computed', () => {
        expect(analyzeObject.min).toBe(1)
    })
    it('Max value is correctly computed', () => {
        expect(analyzeObject.max).toBe(8)
    })
    it('Arr length is correctly computed', () => {
        expect(analyzeObject.length).toBe(6)
    })
})