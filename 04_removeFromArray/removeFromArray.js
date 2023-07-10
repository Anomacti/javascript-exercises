const removeFromArray = function(array, ...targets) {
    /*
    NOTE: JS passes objects by reference, I didn't know that
    at the time of writing this program. I will leave the program
    like this since I already wrote it and it works but it isn't a 
    good solution.
   */

    for(const target of targets) {
        for(let i = 0; i < array.length; i++) {
            if(array[i] === target) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;