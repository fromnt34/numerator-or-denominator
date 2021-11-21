// helpers
const { objectCopy } = require('../objects/objects');



function makeTriggers(...triggers) {
	return triggers;
}

exports.makeTriggers = makeTriggers;


function makeTrigger(properties) {
	return properties;
}

exports.makeTrigger = makeTrigger;


function deleteTriggerProperty(trigger, property) {
	const triggerCopy = objectCopy(trigger);

	delete triggerCopy[property];

	return triggerCopy;
}

exports.deleteTriggerProperty = deleteTriggerProperty;


function rebuildTrigger(trigger, transformation) {
	for (const untransformedKey in transformation) {
		const transformedKey = transformation[untransformedKey];
		const value = trigger[untransformedKey];

		trigger = deleteTriggerProperty(trigger, untransformedKey);

		trigger[transformedKey] = value;
	}


	return trigger;
}

exports.rebuildTrigger = rebuildTrigger;


function getTriggerByIndex(triggers, index) {
	if (index < 0) {
		return triggers[triggers.length + index];
	} else {
		return triggers[index];
	}
}

exports.getTriggerByIndex = getTriggerByIndex;


function prepareTriggers(triggers, prepareFunction) {
	return triggers.map(prepareFunction);
}

exports.prepareTriggers = prepareTriggers;