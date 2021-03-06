// Check out the resources on the page's right side to learn more about arrays. The video tutorial is by Gayle Laakmann McDowell, author of the best-selling interview book Cracking the Coding Interview.

// A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5] , then the array would become [3,4,5,1,2].

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):

// An array of integers .
// An integer , the number of rotations.
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations you must perform. 
// The second line contains  space-separated integers .

// Constraints

// Output Format

// Print a single line of  space-separated integers denoting the final state of the array after performing  left rotations.

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4
// Explanation

// When we perform  left rotations, the array undergoes the following sequence of changes:





// Complete the rotLeft function below.
function rotLeft(a, d) {
    for (let i = 0; i < d; i++) {
        const data = a.shift();
        a.push(data)
    }
    return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4))


