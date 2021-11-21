// helpers
const { isLastIndexInArray } = require('../arrays/arrays');
const { objectCopy } = require('../objects/objects');



const variables = {
	textNewline: '\n',
	textQuote: '"',
	textOr: '|',
	textListElementBegin: '-',
	textListElementEnd: ';'
};

for (const variable in variables) {
	const variableValue = variables[variable];

	exports[variable] = variableValue;
}


function wrap(word, symbol) {
	return symbol + word + symbol;
}

exports.wrap = wrap;


function deleteLastSymbol(string) {
	return string.slice(0, -1);
}

exports.deleteLastSymbol = deleteLastSymbol;


function makeTextDefinition(word, description) {
	return `${word}: ${description}.`;
}

exports.makeTextDefinition = makeTextDefinition;


function makeTextList(elements) {
	let result = '';

	const localVariables = objectCopy(variables);


	for (let index = 0; index < elements.length; index++) {
		const element = elements[index];

		if (isLastIndexInArray(elements, index)) {
			localVariables.textNewline = '';
			localVariables.textListElementEnd = '.';
		}

		result +=
			(localVariables.textListElementBegin + ' ') +
			element +
			(localVariables.textListElementEnd) +
			((localVariables.textNewline).repeat(2));
	}


	return result;
}

exports.makeTextList = makeTextList;