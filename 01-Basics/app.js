var number1 = 2;
var number2 = 3;
var printResult = true;
var resultPhrase = 'Result is: ';
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
add(number1, number2, printResult, resultPhrase);
