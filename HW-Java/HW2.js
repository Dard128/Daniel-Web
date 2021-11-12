//Temp in Kelvin//
const kelvin = 293;

//Temp in Celsius//
let celsius = kelvin - 273;

//Temp in Farenheit//
let Farenheit = Math.floor(celsius * (9/5) + 32);



console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${Farenheit} degrees Fahrenheit.`);