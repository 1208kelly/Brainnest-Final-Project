// Function that will clear the input back to 0
function clearInput() {
    document.getElementById("output-display").innerHTML = "0";
}

// Function that will remove the 0 from the begining of input
function removeZero() {
    let value = document.getElementById("output-display").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output-display").innerHTML = value;
    }
}

// Function that displays percenatge
function percent() {
    let value = document.getElementById("output-display").innerHTML;
    value = value / 100;
    document.getElementById("output-display").innerHTML = value;
}

// Function that displays the number input
function numberDisplay(myvalue) {
    removeZero()
    document.getElementById("output-display").innerHTML += myvalue;
}

// Function that solves the input when = is pressed
function solve() {
    removeZero()
    let equation = document.getElementById("output-display").innerHTML;
    let solved = eval(equation);
    document.getElementById('output-display').innerHTML = solved;
    }