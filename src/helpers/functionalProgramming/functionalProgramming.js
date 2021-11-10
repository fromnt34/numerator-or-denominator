// временное решение
function curry(_function) {
	return (argument1) => {
		return (argument2) => {
			return _function(argument1, argument2);
		};
	};
}

exports.curry = curry;


// временное решение
function reverseArguments(_function) {
	return (argument1, argument2) => {
		return _function(argument2, argument1);
	};
}

exports.reverseArguments = reverseArguments;