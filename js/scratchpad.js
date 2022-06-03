// Setting a constant variable named kelvin and adding a vlue of 293 to it
let kelvin = 300;
// Making a new variable named celcius it is 273 smaller than kelvin
let celsius = kelvin - 273;
// Making a new veriable fahrenheit and converting celcius into F
let fahrenheit = celsius * (9/5) + 32;
// Using Math.floor to remove decimals from the conversion
fahrenheit = Math.floor(fahrenheit);
// Making new variable Newton converted from celsius
let newton = celsius * (33/100);
// Using Math.floor to remove decimals from the conversion
newton = Math.floor(newton);


console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit');
console.log('The temperature is ' + newton + ' degrees Newton');
console.log('The temperature is ' + celsius + ' degrees Celcius');
console.log('The temperature is ' + kelvin + ' degrees Kelvin');
