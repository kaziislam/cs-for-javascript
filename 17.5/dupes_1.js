// pseudocode duplicates as array (key value)

// create empty object map

// loop over array
// if array[i] not in map
//  create new key/value pair on map = 1
// else
//  increment key/value pair by 1

// create variable for most appearing value
// create variable for most appearing count

// loop over object keys/values
//  if value > current most appearing count
//      update "most" variables to match

// return most appearing value and count

const numbers = [41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24];
// const numbers = [41, 24, 28, 1, 40, 24];

const optimizedDuplicates = (arr) => {
    const map = {};

    // first for loop would go here
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

        if (map[value] === undefined) {
            map[value] = 1;
        } else {
            map[value]++;
        }
        console.log(map[value])
    }

    console.log(map);
    let mostValue;
    let mostCount = 0;

    for (const value in map) {
        if (map[value] > mostCount) {
            mostCount = map[value];
            console.log(mostCount, map[value])
            mostValue = value;
            console.log(value, mostValue);
        }
    }

    return `${mostValue} appeared ${mostCount} times`;
};

// console.log(optimizedDuplicates(numbers));

module.exports = { optimizedDuplicates }