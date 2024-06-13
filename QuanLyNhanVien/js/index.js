// Thêm sinh viên vào mảng
let arrSinhVien = [];
document.getElementById("formQLSV").onsubmit = function (event) {
  event.preventDefault();
  let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
  console.log(arrField);
  let SinhVien = new SinhVien();
  console.log(SinhVien);
};
