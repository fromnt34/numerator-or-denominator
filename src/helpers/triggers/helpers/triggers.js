// helpers
const { objectCopy } = require('../../objects/objects');



function getTriggerNames(trigger) {
	return trigger.names;
}

exports.getTriggerNames = getTriggerNames;


function getTriggerDescription(trigger) {
	return trigger.description;
}

exports.getTriggerDescription = getTriggerDescription;


function deleteTriggerProperty(trigger, property) {
	const triggerCopy = objectCopy(trigger);

	delete triggerCopy[property];

	return triggerCopy;
}

exports.deleteTriggerProperty = deleteTriggerProperty;



function prepareTriggers(triggers, prepareFunction) {
	const preparedTriggers = triggers.map(prepareFunction);

	return preparedTriggers;
}

exports.prepareTriggers = prepareTriggers;


function rebuildTrigger(trigger, transformation) {
	const result = {};


	for (const untransformedKey in transformation) {
		const transformedKey = transformation[untransformedKey];
		const value = trigger[untransformedKey];

		result[transformedKey] = value;
	}


	return result;
}

exports.rebuildTrigger = rebuildTrigger;