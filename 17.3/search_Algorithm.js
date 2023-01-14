const data = [107, 12, 23, 38, 40, 125, 54, 62, 71, 87, 99];

// <---------------------------------------->

// linear search
const findIndex = (num) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === num) {
            console.log(`${num} found at index ${i}`)
        }
    }
}

findIndex(23);

// <---------------------------------------->
// var tempData = 0;

// for (i = 0; i < data.length; i++) {
//     // console.log(data[i]);
//     if(data[i] > tempData) {
//         tempData = data[i]
//     }
// }
// console.log(tempData);


// <---------------------------------------->
const binarySearch = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right)/2);

    if (num === arr[middle]) {
        return 'found it';
    } else if (num < arr[middle]){
        right = middle;
        return `bring right down to ${right}`;
    } else if (num > arr[middle]) {
        left = middle + 1;
        return `bring left up to ${left}`;
    }
};
console.log(binarySearch(data, 38));

// <---------------------------------------->
// recursion
const binarySearchRecursion = (arr, num, left, right) => {
    let middle = Math.floor((left + right)/2);

    // range overlapped, so never found number
    if (left > right) {
        return -1;
    }
    else if (num === arr[middle]) {
        return middle;
    }
    else if (num < arr[middle]) {
        // call again with a new right value
        return binarySearchRecursion(arr, num, left, middle -1);
    } 
    else {
        // call again with a new left value
        return binarySearchRecursion(arr, num, middle + 1, right) 
    }
};

// set initial left and right values on first call
console.log(binarySearchRecursion(data, 12, 0, data.length - 1));


// <---------------------------------------->