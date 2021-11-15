// helpers
const {
	timestampToDate,
	convertUTCDateToLocalDate,
	getWeekNumber
} = require('../helpers/dates/dates');
const { isEven } = require('../helpers/numbers/numbers');



function numeratorOrDenominator(context) {
	const numeratorString = 'Числитель';
	const denominatorString = 'Знаменатель';


	const message = context.message;
	const messageSendingTimestamp = message.date;
	const messageSendingDate = timestampToDate(messageSendingTimestamp);
	const messageSendingLocalDate = convertUTCDateToLocalDate(messageSendingDate);
	const weekNumber = getWeekNumber(messageSendingLocalDate);


	context.reply(isEven(weekNumber) ? denominatorString : numeratorString);
}



module.exports = numeratorOrDenominator;