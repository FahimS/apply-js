let year = 3588;
const remainder = year % 4;

if (remainder == 0) {
    console.log("Leap Year");
}
else {
    console.log("Not Leap Year");
}

//..............use function............

function isLeapYear(year) {
    // const remainder = year % 4;

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + " is Leap Year");
    }
    else {
        console.log(year + " is not leap year");
    }
}

isLeapYear(2021);