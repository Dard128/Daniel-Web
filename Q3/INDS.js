result = document.getElementById('result')

resultOperation = function(){

        number1 = document.getElementById("number1");
        number2 = document.getElementById("number2");

        sum = parseInt(number1.value) + parseInt(number2.value);

        Ans = document.getElementById("Ans");
        Ans.innerText = sum;
}

result.addEventListener("click",resultOperation)