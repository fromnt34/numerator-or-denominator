// helpers
const { getWeekNumber } = require('../helpers/dates/dates');
const { isEven } = require('../helpers/numbers/numbers');



function numeratorOrDenominator(context) {
	const numeratorString = 'Числитель';
	const denominatorString = 'Знаменатель';


	const message = context.message;
	// timestamp
	const messageSendingTime = message.date;
	// convert to date object
	const messageSendingDate = new Date(messageSendingTime * 1000);
	const weekNumber = getWeekNumber(messageSendingDate);


	context.reply(isEven(weekNumber) ? denominatorString : numeratorString);
}



module.exports = numeratorOrDenominator;