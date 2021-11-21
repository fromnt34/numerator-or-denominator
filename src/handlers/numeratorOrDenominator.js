// helpers
const {
	timestampToDate,
	convertUTCDateToLocalDate,
	getWeekNumber
} = require('../helpers/dates/dates');
const { isEven } = require('../helpers/numbers/numbers');
const { textNewline } = require('../helpers/text/text');



function numeratorOrDenominator(context) {
	const numeratorString = 'Числитель';
	const denominatorString = 'Знаменатель';

	let additionalInformation = '';


	const message = context.message;

	const messageSendingTimestamp = message.date;

	const messageSendingDate = timestampToDate(messageSendingTimestamp);
	const messageSendingLocalDate = convertUTCDateToLocalDate(messageSendingDate);

	const weekNumber = getWeekNumber(messageSendingLocalDate);

	const isWeekEven = isEven(weekNumber);


	// check if message sending day of week is Sunday
	const messageSendingDayOfWeek = messageSendingLocalDate.getUTCDay();

	if (messageSendingDayOfWeek === 0) {
		additionalInformation =
			textNewline.repeat(2) +
			'Обратите внимание, что сегодня последний день текущей недели (воскресенье), а это значит, что уже завтра (понедельник) неделя будет иметь статус: ' +
			(isWeekEven ? numeratorString : denominatorString) +
			'.';
	}



	context.reply(
		(isWeekEven ? denominatorString : numeratorString) + additionalInformation
	);
}



module.exports = numeratorOrDenominator;