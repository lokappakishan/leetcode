/*

0073-Set-Matrix-Zeroes

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:


Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1


*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
    let isCol = false;
    let rows = matrix.length;
    let cols = matrix[0].length;

    // Traverse the matrix
    for (let i = 0; i < rows; i++) {
        // Check if the first column needs to be zeroed
        if (matrix[i][0] === 0) {
            isCol = true;
        }
        
        // Mark rows and columns to be zeroed
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; // Mark the row
                matrix[0][j] = 0; // Mark the column
            }
        }
    }

    // Zero out marked rows and columns
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero out the first row if needed
    if (matrix[0][0] === 0) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Zero out the first column if needed
    if (isCol) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }

};
