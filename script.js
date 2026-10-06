let inputBox = document.getElementById("input-box");
let userBtn = document.getElementById("user-btn");
let outputBox = document.getElementById("output-box");

userBtn.addEventListener("click", function() {
    outputBox.value = ("@" + inputBox.value + inputBox.value.length );
    if (inputBox.value == "") {
        outputBox.value = ("Please Enter Your Name")
    };     
});