function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(operator, x, y){
    let charCode = operator.charCodeAt(0);

    if(charCode == 43){
        return add(x, y);
    } else if(charCode == 45){
        return subtract(x, y);
    } else if(charCode == 42 || charCode == 88 || charCode == 120){
        return multiply(x, y);
    } else if(charCode == 47){
        return divide(x, y);
    }
}