// commands
const numeratorOrDenominator = require('../../commands/numeratorOrDenominator');
const displayHelp = require('../../commands/displayHelp');

// helpers
const { deleteTriggerProperty, prepareTriggers } = require('./helpers/triggers');
const { lastElementOfArray } = require('../arrays/arrays');
const { curry, reverseArguments } = require('../functionalProgramming/functionalProgramming');



const triggers = [
	{
		names: ['Чз', 'Числитель или знаменатель'],
		description: 'команда выводит информацию о текущей неделе, числитель она или знаменатель',
		command: numeratorOrDenominator,
	},
	{
		names: ['Помощь', 'Help'],
		description: 'команда выводит информацию о доступных командах',
		command: null
	}
];

// add to "Help" trigger a command
const preparedTriggers = prepareTriggers(
	triggers,
	curry(reverseArguments(deleteTriggerProperty))('command')
);

const helpTrigger = lastElementOfArray(triggers);

helpTrigger.command = curry(displayHelp)(preparedTriggers);


exports.triggers = triggers;