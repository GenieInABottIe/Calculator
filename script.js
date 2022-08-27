function clearScreen() {
    let displayBox = document.getElementById("result");
    displayBox.value = ""
}

function display(value) {
    let displayBox = document.getElementById("result");
    displayBox.value += value;
}

function calculate() {
    let dsiplayBox = document.getElementById("result").value;
    let answer = eval(dispalyBox);
    document.getElementById("result").value= answer;
}


// 1. clear function
// 2. calculate fuunction