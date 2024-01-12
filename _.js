
const _ = {
    clamp(num, lowR, highR) {
        if (num <= lowR) {
            return lowR;
        } else if (num >= highR) {
            return highR;
        } else {
            return num;
        }
    }
};



// Do not write or modify code below this line.
module.exports = _;