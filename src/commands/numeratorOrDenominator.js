// helpers
const { timestampToDate, getWeekNumber } = require('../helpers/dates/dates');
const { isEven } = require('../helpers/numbers/numbers');



function numeratorOrDenominator(context) {
	const numeratorString = 'Числитель';
	const denominatorString = 'Знаменатель';


	const message = context.message;
	const messageSendingTimestamp = message.date;
	const messageSendingDate = timestampToDate(messageSendingTimestamp);
	const weekNumber = getWeekNumber(messageSendingDate);


	context.reply(isEven(weekNumber) ? denominatorString : numeratorString);
}



module.exports = numeratorOrDenominator;