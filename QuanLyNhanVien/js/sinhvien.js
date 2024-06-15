class SinhVien {
  constructor() {
    this.tknv = "";
    this.name = "";
    this.email = "";
    this.password = "";
    this.datepicker = "";
    this.luongCB = "";
    this.chucvu = "";
    this.gioLam = "";
    this.loaiNhanVien = "";
  }

  // Tính tổng lương
  tongLuong = function () {
    if ((chucvu = "Sếp")) {
      return this.luongCB * 3;
    } else if ((chucvu = "Trưởng phòng")) {
      return this.luongCB * 2;
    } else if ((chucvu = "Nhân viên")) {
      return this.luongCB;
    }
    console.log(tongLuong);
  };

  // Phương thức sếp loại nhân viên
  xepLoai = function () {
    if ((gioLam = 192)) {
      return "Nhân viên xuất sắc";
    } else if (gioLam >= 176) {
      return "Nhân viên giỏi";
    } else if (gioLam >= 160) {
      return "Nhân viên khá";
    } else if (gioLam < 16) {
      return "Nhân viên trung bình";
    }
  };
}
