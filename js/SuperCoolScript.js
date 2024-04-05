
var button_clicked = function(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var res;
    var ans = "There are 6.84 billion smartphones globally. It is unlikely that you do not own one. Why wouldn't you use that instead of a website to add numbers together?";

    res = num1 + num2;
    console.log(res);

    document.getElementById("answer").innerHTML = ans;
};