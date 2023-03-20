
//#region Request the birth year from the user and show his age. Use a constant in this code. 
const yearBirth = +prompt("Enter your birth year: ");
alert(`Your age: ${2023 - yearBirth}`);

//#endregion

//#region Ask the user for the radius of a circle and display its area

const radius = +prompt("Enter radius of a circle: ");
alert(`Area = ${Math.PI * Math.pow(radius,2)}`);

//#endregion

//#region Ask the user for the distance in km between two cities and the amount of time 
//they have to reach their destination. Calculate the speed they need to travel to 
//arrive on time.

const distance = +prompt("Enter distance in km between two cities: ");
const time = +prompt("Enter the amount of time (hour): ");
alert(`Speed: ${distance/time} km/h`);



//#endregion

//#region Implement a currency converter. The user inputs dollars and the program 
//converts it to euros. Store the currency rate in a constant.
const euro = 0.93;
const dollar = +prompt("Enter count of dollar: ");
alert(`Your money: ${dollar*euro} euro`);
//#endregion

//#region The user enters the capacity of a flash drive in GB. The program should calculate 
//how many files of size 820 MB can be saved on the flash drive
let size = prompt('Enter the volume of the flash drive in GB');
size = size * 1024;
let canbewritten = parseInt(size / 820);
alert(`It is possible to write ${canbewritten} files with a volume of 820 MB`);

//#endregion

