
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
    }, // EXPERIMENT WITH MATH.MIN / MATH.MAX

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
    }
};




// Do not write or modify code below this line.
module.exports = _;