
const _ = {
    //.clamp() takes three arguments: a number, a lower bound, and an upper bound
    //Returns a number that is within the range or transforms it to fit within the range
    clamp(num, lowR, highR) {
        if (num < lowR) {
            return lowR;
        } else if (num > highR) {
            return highR;
        } else {
            return num;
        }
    }, 

    //.inRange() takes three arguments: a number, a start value, and an end value.
    //Returns true if number is within range, false if it is outside
    inRange(num, lowR = 0, highR = num) {
        if (lowR === highR) {
            return false;
        }
        let low = lowR;
        let high = highR;
        if (low > high) {
            high = lowR;
            low = highR;
        }
        return num >= low && num < high;
    }, 

    //.words() takes on argument: a string
    //Splits the string into an array identifying words by a space
    words(str) {
        return str.split(' ');
    },

    //.pad() takes in two arguments: a string and a length
    //Returns a string with spacing added to match length evenly
    pad(str, length) {
        let spaceCounter = length - str.length;
        while (spaceCounter > 0) {
            if (spaceCounter % 2 === 1) {
            str = str + ' ';
            } else {
            str = ' ' + str;
            }
            spaceCounter--;
        }
        return str;
    },

    //.has() takes two arguments: an object and a key
    //Check if there is a value assigned to the object.key
    has(obj, key) {
        return obj[key] === undefined ? false : true;
    },

    //.invert() takes one argument: an object
    //Swaps key/value pairs
    invert(obj) {
        let invertedObj = {};
        for(const key in obj) {
            invertedObj[obj[key]] = key;
        }
        return invertedObj;
    },

    //.findKey() takes two arguments: an object and a predicate function
    //Returns the key who's value returns true or if none are true, return undefined
    findKey(obj, predicate) {
        for (const key in obj) {
            if (predicate(obj[key])) {
                return key;
            }
        }
        return undefined;
    },

    //.drop() takes two arguments: an array and a number representing the number of items to drop from the beginning of the array
    //Deletes the input number of array items from the start of the list
    drop(arr, num = 1) {
        const newArr = arr.slice(num);
        return newArr;
    },

    //.dropWhile() takes two arguments: an array and a predicate function
    //Returns a new array starting at the first index that the predicate function returns false
    dropWhile(arr, predicate) {
        let sliceCount;
        for (const i of arr) {
            if (!predicate(arr[i], i, arr)) {
                sliceCount = i;
                break;
            }
        }
        const newArr = arr.slice(sliceCount);
        return newArr;
    },

    //.chunk() takes two arguments: an array and a size
    //Nests a given array indecies into groups of provided size. If 
    chunk(arr, size = 1) {
        let newArr = [];
        while (arr.length - 1 > 0) {
            const arrChunk = arr.splice(0, size);
            newArr.push(arrChunk);
        }
        if (arr.length > 0) {
            newArr.push([arr[0]]);
        }
        return newArr;
    }
};
    
const testArr = [1, 2, 3, 4, 5];
console.log(_.chunk(testArr));
// Do not write or modify code below this line.
module.exports = _;
