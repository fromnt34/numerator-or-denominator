// handlers
const numeratorOrDenominator = require('../handlers/numeratorOrDenominator');
const displayHelp = require('../handlers/displayHelp');

// helpers
const {
	makeTriggers,
	makeTrigger,
	deleteTriggerProperty,
	getTriggerByIndex,
	prepareTriggers
} = require('../helpers/triggers/triggers');
const { curry, reverseArguments } = require('../helpers/functionalProgramming/functionalProgramming');



const triggers = makeTriggers(
	makeTrigger({
		names: ['Чз', 'Числитель или знаменатель'],
		handler: numeratorOrDenominator,
		description: 'команда выводит информацию о текущей неделе, числитель она или знаменатель'
	}),
	makeTrigger({
		names: ['Помощь', 'Help'],
		handler: null,
		description: 'команда выводит информацию о доступных командах'
	})
);

// add to "Help" trigger a handler
const preparedTriggers = prepareTriggers(
	triggers,
	curry(reverseArguments(deleteTriggerProperty))('handler')
);

const helpTrigger = getTriggerByIndex(triggers, -1);

helpTrigger.handler = curry(displayHelp)(preparedTriggers);



module.exports = triggers;