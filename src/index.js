require('dotenv').config();
const VkBot = require('node-vk-bot-api');

// helpers
const triggers = require('./triggers/triggers');
const { rebuildTrigger, prepareTriggers } = require('./helpers/triggers/triggers');
const { fromAdvancedObjectToNormal } = require('./helpers/objects/objects');
const { curry, reverseArguments } = require('./helpers/functionalProgramming/functionalProgramming');



const bot = new VkBot(process.env.TOKEN);

const triggersAsAdvancedObject = prepareTriggers(
	triggers,
	curry(reverseArguments(rebuildTrigger))({ names: 'keys', handler: 'value' })
);

const triggersAndHandlers = fromAdvancedObjectToNormal(triggersAsAdvancedObject);

for (const trigger in triggersAndHandlers) {
	const handler = triggersAndHandlers[trigger];

	bot.command(trigger, handler);
}



bot.startPolling((error) => {
	if (error) {
		console.log(error);
	}
});