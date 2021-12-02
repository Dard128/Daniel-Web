function math(num1, num2) {
    return num1 + num2
}

let Answer = math(3 , 3)
console.log(Answer)



function pie(num1, num2, num3) {
    return num1 * num2 ^ num3
}

let pia = pie(3.14 , 3, 2)
console.log(pia)




function year(y1, y2) {
    return y1 % y2
}

let year1 = year(2020 , 4)

if (year1 = 4 || 100 || 400) {
    console.log('true');
}else {
    console.log('false');
}


let number1 = Math.floor(Math.random()*10);
let number2 = Math.floor(Math.random()*10);

if (number1 || number2 == 10) {
    console.log(`(${number1},${number2}):true`);
}else{
    console.log(`(${number1},${number2}):false`);
}