/* Task: Implement a function that takes a function as its first argument,
*  a number num as its second argument,
* then exeused the passed in function num times.
*/

function repeat(operation, num) {
	for (var i = 0; i < num; i++) {
		operation;
	}
}

module.exports = repeat;