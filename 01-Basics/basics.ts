const number1 = 2;
const number2 = 3;
const printResult = true;
const resultPhrase = 'Result is: ';

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

add(number1, number2, printResult, resultPhrase);
