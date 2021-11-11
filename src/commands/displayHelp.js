// helpers
const {
	getTriggerNames,
	getTriggerDescription,
	prepareTriggers
} = require('../helpers/triggers/triggers');
const {
	textQuote,
	textOr,
	textNewline,
	wrap,
	deleteLastSymbol,
	makeTextDefinition,
	makeTextList
} = require('../helpers/text/text');



function displayHelp(triggers, context) {
	const template = 'Список команд:';


	const triggersDefinitions = prepareTriggers(
		triggers,
		(trigger) => {
			const triggerNames = getTriggerNames(trigger);
			const triggerQuotedNames = triggerNames.map((name) => wrap(name, textQuote));
			const triggerJoinedNames = triggerQuotedNames.join(' ' + textOr + ' ');

			const triggerDescription = getTriggerDescription(trigger);

			return deleteLastSymbol(makeTextDefinition(triggerJoinedNames, triggerDescription));
		}
	);

	const triggersDefinitionsTextedList = makeTextList(triggersDefinitions);


	context.reply(template + (textNewline.repeat(2)) + triggersDefinitionsTextedList);
}



module.exports = displayHelp;