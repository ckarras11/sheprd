// To run open terminal
// cd JavaScript\ Questions/
// cd cd Remove\ Non\ Int/
// node non-int.js

let arr = ['1',1,'b','a',2, 2, 45, 21, 'c', 'x', 2, '3', 2]
console.log(arr)

for(let i = arr.length-1; i>= 0; i--) {
    if(typeof arr[i] !== 'number') {
        arr.splice(i, 1)
    }
}
console.log(arr)