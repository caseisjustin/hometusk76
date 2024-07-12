export function sum(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

export function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

export function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

export function findMax(arr) {
    return Math.max(...arr);
}

export function findMin(arr) {
    return Math.min(...arr);
}

export function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val);
}

export function averageArray(arr) {
    return arr.reduce((acc, val) => acc + val) / arr.length;
}

export function removeDuplicates(arr) {
    return [...new Set(arr)];
}

export function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

export function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

export function flattenArray(arr) {
    return arr.flat(Infinity);
}

export function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

export function removeNullAndUndefined(arr) {
    return arr.filter(val => val !== null && val !== undefined);
}

export function arrayIntersection(arr1, arr2) {
    return arr1.filter(val => arr2.includes(val));
}
