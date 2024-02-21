function getDaysInMonth(month) {
    // Convert the input to lowercase for case-insensitivity
    const lowercaseMonth = month.toLowerCase();

    // Define the days in each month
    const daysInMonth = {
        january: 31,
        february: 28,
        march: 31,
        april: 30,
        may: 31,
        june: 30,
        july: 31,
        august: 31,
        september: 30,
        october: 31,
        november: 30,
        december: 31,
    };

    // Check if the input month is valid
    if (daysInMonth.hasOwnProperty(lowercaseMonth)) {
        // Output the result
        console.log(`${month} has ${daysInMonth[lowercaseMonth]} days.`);
    } else {
        console.log(`Invalid month: ${month}`);
    }
}

// Example usage
const inputMonth = prompt("Enter a month: ");
getDaysInMonth(inputMonth);


