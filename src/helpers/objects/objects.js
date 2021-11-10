function objectCopy(object) {
	return Object.assign({}, object);
}

exports.objectCopy = objectCopy;


function fromAdvancedObjectToNormal(elements) {
	const result = {};


	for (let index = 0; index < elements.length; index++) {
		const element = elements[index];
		const value = element.value;
		const keys = element.keys;

		for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
			const key = keys[keyIndex];

			result[key] = value;
		}
	}


	return result;
}

exports.fromAdvancedObjectToNormal = fromAdvancedObjectToNormal;