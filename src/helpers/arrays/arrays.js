function isLastIndexInArray(array, index) {
	const lastIndex = array.length - 1;

	return index === lastIndex;
}

exports.isLastIndexInArray = isLastIndexInArray;


function lastElementOfArray(array) {
	const lastIndex = array.length - 1;

	return array[lastIndex];
}

exports.lastElementOfArray = lastElementOfArray;