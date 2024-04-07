
var button_clicked = function(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var res;
    var ans = "There are 6.84 billion smartphones globally. It is unlikely that you do not own one. Why wouldn't you use that instead of a website to add numbers together?";

    console.log(num1,' + ', num2, ' = ', num1 + num2);
    console.log(num1, ' - ', num2, ' = ', num1 - num2);
    console.log(num1, ' * ', num2, ' = ', num1 * num2);
    console.log(num1, ' / ', num2, ' = ', num1 / num2);
    console.log(num1, ' ^ ', num2, ' = ', Math.pow(num1, num2));
    console.log(num1, ' % ', num2, ' = ', num1 % num2);
    console.log('Minimum of ', num1, ' and ', num2, ' is ', Math.min(num1, num2));
    console.log('Maximum of ', num1, ' and ', num2, ' is ', Math.max(num1, num2));
    console.log('Random number between ', num1, ' and ', num2, ' is ', Math.floor((Math.random() * (Math.max(num1, num2))) + (Math.min(num1, num2))));

    document.getElementById("answer").innerHTML = ans;
};