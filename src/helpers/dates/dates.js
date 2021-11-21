function timestampToDate(timestamp) {
    return new Date(timestamp * 1000);
}

exports.timestampToDate = timestampToDate;


function convertUTCDateToLocalDate(date) {
    const offset = date.getTimezoneOffset();
    const offsetInSeconds = offset * 60;
    const offsetInMs = offsetInSeconds * 1000;

    return new Date(date.getTime() - offsetInMs);
}

exports.convertUTCDateToLocalDate = convertUTCDateToLocalDate;


function getWeekNumber(date) {
	const dayInMs = 86400000;


	const dateYear = date.getUTCFullYear();
	const dateMonth = date.getUTCMonth();
	const dateDay = date.getUTCDate();

    const roundedDate = new Date(Date.UTC(dateYear, dateMonth, dateDay));


    // set to nearest Thursday: current date + 4 - current day number
    const roundedDateDay = roundedDate.getUTCDate();
    // make Sunday's day number 7
    const roundedDateWeekDayNumber = roundedDate.getUTCDay() || 7;

    roundedDate.setUTCDate(roundedDateDay + 4 - roundedDateWeekDayNumber);


    // get first day of year
    const roundedDateYear = roundedDate.getUTCFullYear();

    const firstDayOfYear = new Date(Date.UTC(roundedDateYear, 0, 1));


    // calculate full weeks to nearest Thursday
    const weekNumber = Math.ceil((((roundedDate - firstDayOfYear) / dayInMs) + 1) / 7);

    return weekNumber;
}

exports.getWeekNumber = getWeekNumber;