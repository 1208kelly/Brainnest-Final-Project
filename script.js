function clearInput() {
    document.getElementById("output").innerHTML = "0";
}

function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}

function percent() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

function numberDisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}

function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}