// Thêm sinh viên vào mảng
let arrSinhVien = [];

// Lấy dữ liệu sinh viên từ form
function getValueForm() {
  let arrField = document.querySelectorAll("#formQLSV input,#formQLSV select");
  let sinhVien = new SinhVien();
  let isValid = true; // 1
  // vòng lặp for of để xử lí lấy dữ liệu
  for (let field of arrField) {
    // console.log(field);
    let { value, id } = field;
    sinhVien[id] = value;
    // xử lí kiểm tra validation dữ liệu
    // sử dụng một câu lệnh để gọi tới thẻ cha đang chứa input
    let parent = field.parentElement;
    let errorField = parent.querySelector("span");
    let check = checkEmptyValue(value, errorField);
    // Toán nhị phân 1 & 0 ==> 0
    isValid &= check;
    // Chỉ kiểm tra input tên sv
    // Nếu như trường hợp là dữ liệu rỗng thì phải hiển thị là không bỏ trống chứ không hiển thị check min max
    if (check && id == "name") {
      isValid &= checkMinMaxValue(value, errorField, 7, 9);
    }
    if (check && id == "email") {
      isValid &= checkEmailValue(value, errorField);
      // checkPhoneNumberValue(value, errorField);
    }
  }
  if (isValid) {
    return sinhVien;
  }
}

document.getElementById("formQLSV").onsubmit = function (event) {
  event.preventDefault();
  let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
  console.log(arrField);
  let sinhVien = new SinhVien();
  console.log(SinhVien);

  // vòng lặp for of để xử lý lấy dư dữ liệu
  for (let field of arrField) {
    console.log(field);
    let { value, id } = field;
    sinhVien[id] = value;
  }
  console.log(sinhVien);

  // Thêm sinh viên vào mảng
  arrSinhVien.push(sinhVien);
  // Xóa toàn bộ dữ liệu trên form
  document.getElementById("formQLSV").reset();
};
