let name = "ADMIN";
let inputName = prompt("nhập tên đăng nhập");
let pass;

if (inputName == null) {
    alert("cancelled");
} else if(inputName == "ADMIN"){
    pass = prompt("nhập pass : ");
    if (pass === "TheMaster") {
        alert("wellcom");
    } else if (pass == null) {
        alert("cancelled")
    } else {
        alert("Wrong password");
    }
} else {
    alert("I DON'T KNOW YOU!!!");
}