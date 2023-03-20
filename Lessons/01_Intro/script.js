//--------data types-------
//undefine - не існує зміна
let price = 123.5;                 //number
let email = "blabla.gmail.com";    //string
let isValid = true;                //bool
let emptyObject = null;            //null

console.log("Type of price: "+ typeof(price));

//------browser dialogs------
alert("Some alert message!");
const UserName = prompt("Enter your name: ");

//------interpolation-------
console.log(`Hello, dear ${UserName}`);

//----------operators----------
//ariphmetic: + - / * %

//operator +{string data}
const width = +prompt("Enter square side: ");


console.log(`Increment: ${width+1}`);
console.log(`Area of the square: ${width*width}`);
console.log('Stepin: ' + width**3); //степінь