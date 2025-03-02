let x = +prompt("nhập số năm : ");
if (x < 1) {
    alert("mới vào nghề");
} else if (x >= 1 && x <= 3) {
    alert("nhân viên có kinh nghiệm");
} else if (x >= 4 && x <= 6) {
    alert("chuyên viên");
} else if (x > 6) {
    alert("quản lý");
}