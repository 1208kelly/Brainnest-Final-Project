function clearInput() {
    document.getElementById("output-display").innerHTML = "0";
}

function removeZero() {
    var value = document.getElementById("output-display").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output-display").innerHTML = value;
    }
}

function percent() {
    var value = document.getElementById("output-display").innerHTML;
    value = value / 100;
    document.getElementById("output-display").innerHTML = value;
}

function numberDisplay(myvalue) {
    removeZero()
    document.getElementById("output-display").innerHTML += myvalue;
}

function solve() {
    removeZero()
    var equation = document.getElementById("output-display").innerHTML;
    var solved = eval(equation);
    document.getElementById('output-display').innerHTML = solved;
    }