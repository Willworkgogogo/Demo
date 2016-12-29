/**
 * Created by wangweiwei on 16/11/29.
 */
function sumMatrix(matrix: number[][]){
    let sum = 0;
    for ( let i = 0; i < matrix.length; i++ ){
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++){
            sum += currentRow[i];
        }
    }
    return sum;
}

var arr = [[1,2,3],[1,2]];
console.log(sumMatrix(arr));