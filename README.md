# wdi-10-functions-lab

1. Write a function `lengths` that accepts a single parameter as an argument, namely
an array of strings. The function should return an array of numbers where each
number is the length of the corresponding string.

```javascript
var words = ["hello", "what", "is", "up", "dude"]
lengths(words)  # => [5, 4, 2, 2, 4]
```

2. Write a Javascript function called `transmogrifier`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the power of 2` is 225. Use your function to find the following answers.

```javascript

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

```


3. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

4. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

5. Write a function `isCharacterAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

7. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

8. Write a function that return the number of arguments passed to the function when called.

9. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

10. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

11. Write a function `filterLongWords` that takes an array of words and a number `i` and returns the array of words that are longer than i characters long.


**Bonus**

1. Attach the function `reverseString` (from question 6) to the object String so that it is possible to call: `"General Assembly".reverseString()`.

2. Write a function that takes a string as argument and returns an object where:
  - the keys are the characters that occur in the string
  - the values are the number of occurences for each letter, regardless of the case

For example, calling the function with the string "General Assembly" will return:

```javascript
{
  a: 2,
  b: 1,
  e: 3,
  g: 1,
  l: 2,
  m: 1,
  n: 1,
  r: 1,
  s: 2,
  y: 1
}
```
