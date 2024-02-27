// Test methodes
function capitalize(input){
    const upperCase = input.slice(0,1).toUpperCase();
    return upperCase + input.slice(1);
}

function reverseString(string){
    let strArr = [...string];
    return strArr.reverse().join('');
}

const calculator = {
    add: function add(num1, num2){
        return num1 + num2;
    },
    subtract: function subtract(num1, num2){
        return num1 - num2;
    },
    divide: function divide(num1, num2){
        return num1 / num2;
    },
    multiply: function multiply(num1, num2){
        return num1 * num2;
    },
}

function caesarCipher (input, key){
    const asciiChecker = (ascii) => {
        if (ascii === 32) return ascii;
        if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)){
            return ascii;
        }
        if (ascii > 122){
            return 97 + ascii - 123;
        }
        if (ascii > 90 && ascii < 97){
            return 65 + ascii - 91;
        }
    }
    const charArr = [...input];
    return charArr.map((char) => {
        const charCode = char.charCodeAt(0);
        if (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) return String.fromCharCode(charCode);
        return String.fromCharCode(asciiChecker(charCode + key));
    }).join('');
}
// const object = analyzeArray([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };
function analyzeArray(arr){
    const average = (arr) => {
        let elSum = 0;
        arr.forEach(element => {
            elSum += element;
        });
        return elSum / arr.length
    }
    const min = (arr) => {
        let min = arr[0];
        arr.forEach(element => {
            if(min > element) min = element
        });
        return min;
    }
    const max = (arr) => {
        let max = arr[0];
        arr.forEach(element => {
            if(max < element) max = element
        });
        return max;
    }
    const length = (arr) => {
        return arr.length;
    }

    return {
        average: average(arr),
        min: min(arr),
        max: max(arr),
        length: length(arr),
    }
}

const analyzeObject = analyzeArray([1,8,3,4,2,6]);

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeObject };