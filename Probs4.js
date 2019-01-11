// Lilah has a string s, the first  of lowercase English letters that she repeated infinitely many times.

// Given an integer n, find and print the number of letter a's in the first  letters of Lilah's infinite string.

// For example, if the string s='abcac' and n=10 the substring we consider is'abcacabcac' , the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Input Format

// The first line contains a single string s. 
// The second line contains an integer n .

// Constraints

// For  of the test cases, .
// Output Format

// Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.

// Sample Input 0

// aba
// 10
// Sample Output 0

// 7
// Explanation 0 
// The first  letters of the infinite string are abaabaabaa. Because there are  a's, we print  on a new line.

// Sample Input 1

// a
// 1000000000000
// Sample Output 1

// 1000000000000
// Explanation 1 
// Because all of the first  letters of the infinite string are a, we print  on a new line.



// Complete the repeatedString function below.
function repeatedString(s, n) {
    const getLength = (str) => {
        if (str) {
            return str.split('').filter((val) => {
                return val === 'a'
            }).length
        }
        return 0;
    }
    const re = Math.floor(n / s.length);
    const n2 = n - re * s.length;
    const res = getLength(s) * re + (getLength(s.substr(0, n2)));
    return res;
}

console.log(repeatedString('jarvisa', 20));
