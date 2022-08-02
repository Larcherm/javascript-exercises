const removeFromArray = function(array) {
    
    const args = Array.prototype.slice.call(arguments, 1);
    for (let i = 0; i < array.length; i++) {
        for (let arg of args) {
            if (array[i] === arg) {
                array.splice(i, 1);
                i--;
            }
        }       
    }
    return array;
};
console.log(removeFromArray([1, 2, 4, 3], 4, 2));
// Do not edit below this line
 module.exports = removeFromArray;
