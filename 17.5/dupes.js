
// const numbers = [41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24];
const numbers = [41, 24, 28, 1, 40, 24];


const mostDuplicates = (arr) => {
    let mostValue;
    let mostCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        // nested loop would go here
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j])
                counter++;
        }

        if (counter > mostCount) {
            mostCount = counter;
            mostValue = arr[i];
            console.log(mostValue);
        }
    }
    return `${mostValue} appeared ${mostCount} times.`;
};

// console.log(mostDuplicates(numbers));

module.exports = { mostDuplicates };