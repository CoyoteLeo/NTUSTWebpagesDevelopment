function add() {
    let num1, num2;
    document.getElementById("ans").innerHTML = "ans: " + (parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value))
}
function sub() {
    let num1, num2;
    document.getElementById("ans").innerHTML = "ans: " + (parseFloat(document.getElementById("num1").value) - parseFloat(document.getElementById("num2").value))
}
function mul() {
    let num1, num2;
    document.getElementById("ans").innerHTML = "ans: " + (parseFloat(document.getElementById("num1").value) * parseFloat(document.getElementById("num2").value))
}
function div() {
    let num1, num2;
    document.getElementById("ans").innerHTML = "ans: " + (parseFloat(document.getElementById("num1").value) / parseFloat(document.getElementById("num2").value))
}