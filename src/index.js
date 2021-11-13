require('dotenv').config();
const VkBot = require('node-vk-bot-api');

// helpers
const { triggers } = require('./triggers/triggers');
const { rebuildTrigger, prepareTriggers } = require('./helpers/triggers/triggers');
const { fromAdvancedObjectToNormal } = require('./helpers/objects/objects');
const { curry, reverseArguments } = require('./helpers/functionalProgramming/functionalProgramming');



const bot = new VkBot(process.env.TOKEN);

const preparedTriggers = prepareTriggers(
	triggers,
	curry(reverseArguments(rebuildTrigger))({ names: 'keys', command: 'value' })
);

const triggersAndCommands = fromAdvancedObjectToNormal(preparedTriggers);

for (const trigger in triggersAndCommands) {
	const command = triggersAndCommands[trigger];

	bot.command(trigger, command);
}



bot.startPolling((error) => {
	if (error) {
		console.log(error);
	}
});