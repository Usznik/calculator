const userInput = document.getElementById("userInput");
var expression = '';

function press(num)
{
    expression += num;
    userInput.value = expression;

}
function equal()
{ 
    userInput.value = eval(expression);            
    //The eval() function evaluates JavaScript code represented as a string.
    expression = '';
}

function erase()
{
expression = '';
userInput.value = expression;
}
