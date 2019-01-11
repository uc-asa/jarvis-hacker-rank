// ---- Create magic matrix ----
//   Work for odd number

// Algorithm:  

// 	n is value of matrix
// 	i is row and j is column

// 	1) is stored at position (n/2, n-1)

// 	2) The next number is stored at position (i-1, j+1) 
// 	The position of next number is calculated by decrementing row number of previous number by 1, and incrementing the column number of previous number by 1. At any time, if the calculated row position becomes -1, it will wrap around to n-1. Similarly, if the calculated column position becomes n, it will wrap around to 0.

// 	3) If the magic square already contains a number at the calculated position, calculated column position will be decremented by 2, and calculated row position will be incremented by 1.

// 	4) If the calculated row position is -1 & calculated column position is n, the new position would be: (0, n-2).


function getMagic(n) {
	if (n %2 == 1) {
		let i = Math.floor(n / 2);
	    let j = n - 1;
	    let arr = [];
	    for (let num = 1; num <= n * n;) {
	        if (i === -1 && j === n) {
	            i = 0;
	            j = n - 2;
	        }
	        if (i === -1) {
	            i = n - 1;
	        }
	        if (j === n) {
	            j = 0;
	        }

	        // Create blank arrat for avoiding error in javascript
	        if (typeof arr[i] == 'undefined') {
	            arr[i] = [];
	        }

	        // skipping the insertion when item is exits
	        if (arr[i][j]) {
	            j -= 2;
	            i++;
	            continue;
	        }
	        // Inserting the number inti the array
	        arr[i][j] = num++;
	        i--;
	        j++;
	    }
	    return arr;
	}
}
console.log(getMagic(5));
console.log(getMagic(3));
console.log(getMagic(7));