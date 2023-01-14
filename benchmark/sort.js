const numbers = [54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2];

const bubbleSort = (arr) => {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            // compare arr[i] to arr[i+1]
            if (arr[i] > arr[i + 1]) {
                // swap places if needed
                let temp = arr[i];
                // if swapped, set sorted = false to run while loop again
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                // flag as not sorted to run loop again
                sorted = false;
            }
        }
        return arr;
    }
}

// console.log(bubbleSort(numbers));

// pseudocode

// choose first item in the array as pivot point
// create empty left array
// create empty right array

// loop over items
//  if items[i] less than pivot
//      push into left array
//  else
//      push into right

// run same logic again on left and right arrays
// return sorted left array + pivot + sorted right array

const quickSort = (arr) => {
    // don't quick-sort a small array; just return it immediately
    if (arr.length <= 1) {
        return arr;
    }

    // use first index as the pivot point
    const pivot = arr[0];
    const left = [];
    const right = [];

    // start at index 1 to ignore pivot
    for (let i = 1; i < arr.length; i++) {
        // push into different arrays based on value compared to pivot
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // merge the sorted arrays and pivot together
    return quickSort(left).concat(pivot, quickSort(right));
}

// export along with bubble sort
module.exports = { bubbleSort, quickSort }
