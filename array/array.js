function insertByIndex(arr, index, value) {
    var len = arr.length;
    if (!len) {
        arr = [value];
        return arr;
    }
    for (var i = len - 1; i >= index; i--) {
        arr[i + 1] = arr[i];
    }
    arr[index] = value;
    return arr;
}
function removeByIndex(arr, index) {
    var len = arr.length;
    if (!len) {
        return arr;
    }
    for (var i = index; i < len - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = len - 1;
    return arr;
}
function insertValue(arr, index, value) {
    var len = arr.length;
    if (!len) {
        arr = [value];
        return arr;
    }
    arr[len] = arr[index];
    arr[index] = value;
    return arr;
}
function removeValue(arr, index) {
    var len = arr.length;
    if (!len) {
        return arr;
    }
    delete arr[index];
    return arr;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
// console.log(insertByIndex(arr, 5, 11));
// console.log(insertByIndex(arr, 8, 16));
// console.log(removeByIndex(arr, 8));
// console.log(removeByIndex(arr, 5));
console.log(insertValue(arr, 5, 11));
console.log(insertValue(arr, 8, 16));
console.log(removeValue(arr, 8));
console.log(removeValue(arr, 2));
console.log(removeValue(arr, 1));
console.log(removeValue(arr, 0));
var startEmpty = false;
var j = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[j] === undefined || startEmpty) {
//     startEmpty = true;
//     if (arr[i + 1] !== undefined) {
//       arr[j] = arr[i + 1];
//       j++;
//     }
//   } else {
//     j++;
//   }
// }
for (var i = 0; i < arr.length; i++) {
    if (arr[j] === undefined || i !== j) {
        if (arr[i + 1] !== undefined) {
            arr[j] = arr[i + 1];
            j++;
        }
    }
    else {
        j++;
    }
}
arr.length = j;
console.log(arr);
