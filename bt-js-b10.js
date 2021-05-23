console.log("=============== BAI 1 ===============");
// Bai 1 Tính tiền lương
/**
 * B1: Input: Số ngày lương
 * - 
 * B2: Handle
 * - Tạo biến luongMotNgay, soNgayLuong, tienLuong
 * - Tính lương thực nhận: tienLuong = luongMotNgay * soNgayLuong
 * B3: Output
 * - Xuất ra tiền lương
 */
// B1: Input
var luongMotNgay = 100000;
var soNgayLuong = 25;
var tienLuong;
//B2: Handle
tienLuong = luongMotNgay*soNgayLuong;
//B3: Output
console.log('Tien luong nhan vien la ' + tienLuong + ' dong');



console.log('=============== BAI 2 ===============');
// Bai 2 Tính giá trị trung bình
/**
 * B1: Input: Giá trị của 5 số thực
 * 
 * B2: Handle
 * - tạo biến so1, so2, so3, so4, so5, trungBinhCong
 * - Tính giá trị trung bình: trungBinhCong = (so1 + so2 + so3 + so4 + so5)/5;
 * 
 * B3: Output: Xuất giá trị trung bình.
 */

//B1: Input
var so1 = 11;
var so2 = 22;
var so3 = 33;
var so4 = 44;
var so5 = 55;
var trungBinhCong;
//B2: Handle
trungBinhCong = (so1 + so2 + so3 + so4 + so5)/5;
//B3: Output
console.log('Gia tri trung binh cua 5 so la ' + trungBinhCong);



console.log('=============== BAI 3 ===============');
// Bai 3
/**
 * B1: Input: nhập số tiền USD
 * 
 * B2: Handle
 * - tạo biến tyGiaUSD, soTienUSD, soTienVND
 * - tính số tiền USD: soTienVND = tyGiaUSD * soTienUSD
 * 
 * B3: Output: Xuất ra số tiền VND
 */
// B1:
var tyGiaUSD = 23500;
var soTienUSD = 1000;
var soTienVND;
// B2:
soTienVND = tyGiaUSD * soTienUSD;
// B3:
console.log('So tien quy doi VND la ' + soTienVND + ' dong')



console.log('=============== BAI 4 ===============');
// Bai 4
/**
 * B1: Input: nhập chiều dài và chiều rộng HCN
 * 
 * B2: Handle
 * - tạo biến chieuDai, chieuRong, chuViHCN, dienTichHCN
 * - tính chu vi HCN: chuViHCN = (chieuDai + chieuRong)*2
 * - tính dien tich HCN: dienTichHCN = chieuDai*chieuRong
 * 
 * B3: Output: Xuất ra chu vi và diện tích HCN
 */
// B1:
var chieuDai = 8;
var chieuRong = 6;
// B2:
var chuViHCN = (chieuDai + chieuRong)*2;
var dienTichHCN = chieuDai*chieuRong;
// B3:
console.log('Chu vi HCN la ' + chuViHCN + ' cm');
console.log('Dien tich HCN la '+ dienTichHCN + ' cm2')



console.log('=============== BAI 5 ===============');
// Bai 5
/**
 * B1: Input: nhập vào số có 2 chữ số
 * 
 * B2: Handle
 * - tạo biến so2ChuSo, soHangChuc, soHangDonVi, tong2KySo
 * - tính chữ số hàng chục: soHangChuc = so2ChuSo / 10 rồi làm tròn xuống
 * - tính chữ số hàng đơn vị: soHangDonVi = so2ChuSo % 10
 * - tính tổng 2 ký số: tong2KySo = soHangChuc + soHangDonVi
 * 
 * B3: Output: Xuất ra chu vi và diện tích HCN
 */
// B1:
var so2ChuSo = 78;
// B2:
var soHangChuc = Math.floor(so2ChuSo/10);
var soHangDonVi = so2ChuSo%10;
var tong2KySo = soHangChuc + soHangDonVi;
// B3:
console.log('Tong 2 ky so cua so ' + so2ChuSo + ' la ' + tong2KySo);