import {
    sum,
    subtract,
    multiply,
    divide,
    isPalindrome,
    reverseString,
    factorial,
    fibonacci,
    findMax,
    findMin,
    sumArray,
    averageArray,
    removeDuplicates,
    capitalize,
    countVowels,
    isAnagram,
    flattenArray,
    chunkArray,
    removeNullAndUndefined,
    arrayIntersection
} from "./functionsToBetested.js"
import { describe, test, it, expect } from "vitest"


describe("All functions", () => {
    it("1st sum function running", () => {
        expect(sum(1, 2)).toBe(3)
        expect(sum(-1, 2)).toBe(1)
        expect(sum(-1, -2)).toBe(-3)
        expect(sum("hello", "1")).toBe("hello1")
        expect(sum("hello", 1)).toBe("hello1")
        expect(sum("hello")).toBe("helloundefined")
        expect(sum()).toBe(NaN)
    })

    it("2nd subtract function running", () => {
        expect(subtract(1, 2)).toBe(-1)
        expect(subtract(-1, 2)).toBe(-3)
        expect(subtract("1", "2")).toBe(-1)
        expect(subtract(1, "1x")).toBe(NaN)
        expect(subtract("-1", "one")).toBe(NaN)
    })

    it("3rd multiply function running", () => {
        expect(multiply(1, 5)).toBe(5)
        expect(multiply(1, -5)).toBe(-5)
        expect(multiply(-1, 5)).toBe(-5)
        expect(multiply("1", 5)).toBe(5)
        expect(multiply(1, "5")).toBe(5)
        expect(multiply("1", "5")).toBe(5)
        expect(multiply("1", "five")).toBe(NaN)
        expect(multiply("one", "five")).toBe(NaN)
    })

    it("4th divide function running", () => {
        expect(divide(3, 2)).toBe(1.5)
        expect(divide(-3, 2)).toBe(-1.5)
        expect(divide(3, -2)).toBe(-1.5)
        expect(divide(-3, -2)).toBe(1.5)
        expect(divide("3", 2)).toBe(1.5)
        expect(divide(3, "2")).toBe(1.5)
        expect(divide("3", "2")).toBe(1.5)
        expect(divide("one", "2")).toBe(NaN)
        expect(divide(3, "two")).toBe(NaN)
        expect(divide("one", "two")).toBe(NaN)
        expect(divide(3, "-2")).toBe(-1.5)
    })

    it("5th isPalindrome function running", () => {
        expect(isPalindrome("sts")).toBe(true)
        expect(isPalindrome("1")).toBe(true)
        expect(isPalindrome("str" + "olleh")).toBe(false)
        expect(isPalindrome("sthoijfh")).toBe(false)
    })
    
    it("6th reverseString function running", () => {
        expect(reverseString("sts")).toBe("sts")
        expect(reverseString("1")).toBe("1")
        expect(reverseString("st" + "ok")).toBe("kots")
        // expect(reverseString(1)).toBe(Error)  need to be string
    })

    it("7th factorial function running", () => {
        expect(factorial(3, 2)).toBe(6)
        expect(factorial(5)).toBe(120)
        expect(factorial("5")).toBe(120)
        // expect(factorial(-3)).toBe(6)  infinity error
        // expect(factorial(-3, 2)).toThrowError(RangeError)
    })

    it("8th fibonacci function running", () => {
        expect(fibonacci(8)).toBe(21)
        expect(fibonacci(5)).toBe(5)
        expect(fibonacci("5")).toBe(5)
        expect(fibonacci("-5")).toBe("-5")
        expect(fibonacci(-5)).toBe(-5)
        expect(fibonacci(-8)).toBe(-8)
    })

    it("9th findMax function running", () => {
        expect(findMax([1, 2, 3, 4, 5, 6])).toBe(6)
        expect(findMax(["a", , , , ,])).toBe(NaN)
        expect(findMax("5")).toBe(5)
        expect(findMax("-5")).toBe(NaN)
        expect(findMax([-5, -1, -4, -99])).toBe(-1)
        expect(findMax(["8", "3", "28"])).toBe(28)
    })

    it("10th findMin function running", () => {
        expect(findMin([1, 2, 3, 4, 5, 6])).toBe(1)
        expect(findMin(["a", , , , ,])).toBe(NaN)
        expect(findMin("5")).toBe(5)
        expect(findMin("-5")).toBe(NaN)
        expect(findMin([-5, -1, -4, -99])).toBe(-99)
        expect(findMin(["8", "3", "28"])).toBe(3)
    })

    it("11th sumArray function running", () => {
        expect(sumArray([1, 2, 3, 4, 5, 6])).toBe(21)
        expect(sumArray(["a", "b", , , ,])).toBe("ab")
        expect(sumArray([4, "2", "1"])).toBe('421')
        // expect(sumArray("-5")).toBe(NaN)  don't get string value
        expect(sumArray([-5, -1, -4, -99])).toBe(-109)
        expect(sumArray(["8", "3", "28"])).toBe("8328")
    })

    it("12th averageArray function running", () => {
        expect(averageArray([1, 2, 3, 4, 5, 6])).toBe(21/6)
        expect(averageArray(["a", "b", , , ,])).toBe(NaN)
        expect(averageArray([4, "2", "1"])).toBe(140.33333333333334)
        // expect(averageArray("-5")).toBe(NaN)  don't get string value
        expect(averageArray([-5, -1, -4, -99])).toBe(-27.25)
        expect(averageArray(["8", "3", "28"])).toBe(2776)
    })

    it("13th removeDuplicates function running", () => {
        expect(removeDuplicates([1, 2, 1, 4, 5, 6])).toStrictEqual([...new Set([1, 2, 1, 4, 5, 6])])
        expect(removeDuplicates(["a", "b",])).toStrictEqual(["a", "b"])
        expect(removeDuplicates([4, "2", "1", 4, "2"])).toStrictEqual([4, "2", "1"])
        expect(removeDuplicates("-5")).toStrictEqual(["-", "5"])  //don't get string value
        expect(removeDuplicates([-5, -1, -4, -99])).toStrictEqual([-5, -1, -4, -99])
        expect(removeDuplicates(["8", "3", "28"])).toStrictEqual(["8", "3", "28"])
    })

    it("14th capitalize function running", () => {
        expect(capitalize("hello world ")).toStrictEqual("Hello World ")
        expect(capitalize("a", "b")).toStrictEqual("A")
        expect(capitalize("4")).toBe("4")
        expect(capitalize("-5")).toStrictEqual("-5") 
        expect(capitalize("4 hello this is test 14")).toStrictEqual("4 Hello This Is Test 14")
    })

    it("15th countVowels function running", () => {
        expect(countVowels("hello world ")).toStrictEqual(3)
        expect(countVowels("a", "b")).toStrictEqual(1)
        expect(countVowels("4")).toBe(0)
        // expect(countVowels(-5)).toStrictEqual("-5")  //don't get number value
        expect(countVowels("4 hello this is test 14")).toStrictEqual(5)
    })

    it("16th isAnagram function running", () => {
        // expect(isAnagram("hello world ")).toBe(3) // can't read undefined 2 args needed
        expect(isAnagram("a", "b")).toBe(false)
        expect(isAnagram("4", "4")).toBe(true)
        // expect(isAnagram("5", 5)).toBe(false)  //don't get number value
        expect(isAnagram("4 hello this", " is test 14")).toBe(false)
    })

    it("17th flattenArray function running", () => {
        expect(flattenArray([1, [2, [3, 4], 5]], [1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
        expect(flattenArray(["a", "b"])).toStrictEqual(["a", "b"])
        // expect(flattenArray("4")).toStrictEqual(0) cannot get string and number values
        expect(flattenArray([[], "a", "b", [["f", 1, ['a']]], 34])).toStrictEqual(["a", "b", "f", 1, "a", 34,])  //don't get number value
    })

    it("18th chunkArray function running", () => {
        expect(chunkArray([1, [2, [3, 4], 5]], 5)).toStrictEqual([[1, [2, [3, 4], 5]]])
        expect(chunkArray(["a", "b"], 2)).toStrictEqual([ ["a", "b",]])
        expect(chunkArray("4", 5)).toStrictEqual(["4"]) // cannot get string and number values
        expect(chunkArray([[], "a", "b", [["f", 1, ['a']]], 34], "4")).toStrictEqual([[[],"a","b",[["f",1,["a",],],],],[34,],])
    })

    it("19th removeNullAndUndefined function running", () => {
        expect(removeNullAndUndefined([1, [2, [3, 4], 5]], 5)).toStrictEqual([1, [2, [3, 4], 5]])
        expect(removeNullAndUndefined(["a", "b", null, undefined, null], 2)).toStrictEqual(["a", "b"])
        expect(removeNullAndUndefined(["4"], 5)).toStrictEqual(["4"]) // cannot get string and number values
        expect(removeNullAndUndefined([[], "a", "b", [["f", 1, ['a']]], 34], "4")).toStrictEqual([[],"a","b",[["f",1,["a"],],], 34,])
    })

    it("20th arrayIntersection function running", () => {
        expect(arrayIntersection([1, 2, 5, 34, 66], [1, 4, 6, 33, 66])).toStrictEqual([1, 66])
        expect(arrayIntersection(["hello", 'a', 'e', 'od'], ['a', 'b', 'helo', 'okj'])).toStrictEqual(["a"])
        expect(arrayIntersection(["hello", 'a', 'e', 'od'], ['a', 'b', 'helo', 'okj', 3])).toStrictEqual(["a"])
        // expect(arrayIntersection(45, 45)).toStrictEqual(["a"]) // cannot pass numbers
        // expect(arrayIntersection("45", "45")).toStrictEqual("45") // cannot pass strings
    })

})
