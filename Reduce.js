/* Task: 
* Given an Array of strings, use Array#reduce to create 
* an object that contains the number of times each string 
* occured in the array. Return the object directly 
* (no need to console.log).
*/

function countWords(inputWords) {
	var result = {};
	inputWords.reduce(function(acc, current, ind, arr) {
		if (!result[current]) {
			result[current] = 1;
		}
		else {
			result[current]++;
		}
		return current;
	}, null);
	return result;
}

module.exports = countWords;