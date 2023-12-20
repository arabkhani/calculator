//calculte the sum of two number
function sum(num1, num2) {
    return num1 + num2;
}
//calculate the subtraction of two number
function sub(num1, num2) {
    return num1 - num2;
}
//calculate the multiplication of two number
function multi(num1, num2) {
    return num1 * num2;
}
//calculate the division of two number
function divide(num1, num2) {
    return num1 / num2;
}
//calculate the power of two number
function power(num1, num2) {
    return Math.pow(num1, num2);
}
//calculate the second root of the number
function S_root(num1) {
    num1 = Math.abs(num1);
    return Math.pow(num1, 1 / 2);
}
//main calculator
function cal(){
    //get full calcualtion value
    const cll = document.querySelector('#calculation').value;
    //save it to an array 
    const arr = cll.split(" ");
    //get first number
    const numb1 = parseFloat(arr[0]);
    //get second number
    const numb2 = parseFloat(arr[2]);
    //get operator
    const operator = arr[1];
    //find exact calculation throw operator
    switch (operator) {
        case "+":
            document.querySelector("#result").value = sum(numb1, numb2);
            break;
        case "-":
            document.querySelector("#result").value = sub(numb1, numb2);
            break;
        case "x":
            document.querySelector("#result").value = multi(numb1, numb2);
            break;
        case "/":
            document.querySelector("#result").value = divide(numb1, numb2);
            break;
        case "pw2":
            document.querySelector("#result").value = power(numb1, numb2);
            break;
        case "√":
            document.querySelector("#result").value = S_root(numb1);
            break;
    }

}