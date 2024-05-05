// Question __________________ 106

function isLeapYear(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const year = 2024;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}


// Question ______________ 107


function isDivisibleBy2And3(number: number): boolean {
    return number % 2 === 0 && number % 3 === 0;
}

// Example usage:
const num = 12;
if (isDivisibleBy2And3(num)) {
    console.log(`${num} is divisible by both 2 and 3.`);
} else {
    console.log(`${num} is not divisible by both 2 and 3.`);
}


// Question _________________ 108


function areStringsIdenticalIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}

// Example usage:
const string1 = "Hello";
const string2 = "hello";

if (areStringsIdenticalIgnoreCase(string1, string2)) {
    console.log("The strings are identical, ignoring case sensitivity.");
} else {
    console.log("The strings are not identical, considering case sensitivity.");
}
