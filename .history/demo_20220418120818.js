let arrBanKinh = [10, 30, 50];

// Tạo hàm tính diện tích
function tinhDienTich(banKinh) {
  return Math.floor(Math.PI * banKinh * banKinh);
}

// Sử dụng map() tạo một mảng mới, và áp dụng
// hàm tính diện tích cho từng phần tử
// trong mảng arrBanKinh
let arrDienTich = arrBanKinh.map(tinhDienTich);
if (arrDienTich.checked) {
}
// In kết quả
// console.log(arrDienTich);
