// var button = document.querySelectorAll(".btn-active");
// for (var i = 0; i < button.length; i++) {
//     let index = i;
//     if (i == 0) {
//         button[i].classList.add("active");
//     }
//     button[i].addEventListener("click", function() {
//         for (var j = 0; j < button.length; j++) {
//             if (index != j) {
//                 button[j].classList.remove("active");
//             } else {
//                 button[j].classList.add("active");
//             }
//         }
//     });
// }
document.getElementById("bai1").focus();

document.getElementById("bai1").onclick = function() {
    var Bai1 = document.getElementById("content1");
    Bai1.style.display = "block";
    // var Bai1 = document.getElementById("bai1");
    // Bai1.innerHTML = "📖Bài 1";

    var Bai1 = document.getElementById("content2");
    Bai1.style.display = "none";
    var Bai1 = document.getElementById("content3");
    Bai1.style.display = "none";
    var Bai1 = document.getElementById("content4");
    Bai1.style.display = "none";
    var Bai1 = document.getElementById("content5");
    Bai1.style.display = "none";
};
// function Bai1() {
//     var Bai1 = document.getElementById("content1");
//     Bai1.style.display = "block";
// }
document.getElementById("bai2").onclick = function() {
    var Bai2 = document.getElementById("content2");
    Bai2.style.display = "block";
    // var Bai2 = document.getElementById("bai2");
    // Bai2.innerHTML = "📖Bài 2";
    var Bai2 = document.getElementById("content1");
    Bai2.style.display = "none";
    var Bai2 = document.getElementById("content3");
    Bai2.style.display = "none";
    var Bai2 = document.getElementById("content4");
    Bai2.style.display = "none";
    var Bai2 = document.getElementById("content5");
    Bai2.style.display = "none";
};
document.getElementById("bai3").onclick = function() {
    var Bai3 = document.getElementById("content3");
    Bai3.style.display = "block";
    // var Bai3 = document.getElementById("bai3");
    // Bai3.innerHTML = "📖Bài 3";
    var Bai3 = document.getElementById("content1");
    Bai3.style.display = "none";
    var Bai3 = document.getElementById("content2");
    Bai3.style.display = "none";
    var Bai3 = document.getElementById("content4");
    Bai3.style.display = "none";
    var Bai3 = document.getElementById("content5");
    Bai3.style.display = "none";
};
document.getElementById("bai4").onclick = function() {
    var Bai4 = document.getElementById("content4");
    Bai4.style.display = "block";
    // var Bai4 = document.getElementById("bai4");
    // Bai4.innerHTML = "📖Bài 4";
    var Bai4 = document.getElementById("content1");
    Bai4.style.display = "none";
    var Bai4 = document.getElementById("content2");
    Bai4.style.display = "none";
    var Bai4 = document.getElementById("content3");
    Bai4.style.display = "none";
    var Bai4 = document.getElementById("content5");
    Bai4.style.display = "none";
};
document.getElementById("bai5").onclick = function() {
    var Bai5 = document.getElementById("content5");
    Bai5.style.display = "block";
    // var Bai5 = document.getElementById("bai5");
    // Bai5.innerHTML = "📖Bài 5";
    var Bai5 = document.getElementById("content1");
    Bai5.style.display = "none";
    var Bai5 = document.getElementById("content2");
    Bai5.style.display = "none";
    var Bai5 = document.getElementById("content3");
    Bai5.style.display = "none";
    var Bai5 = document.getElementById("content4");
    Bai5.style.display = "none";
};
//  bài 1 tính lương nhân viên
// số ngày = lấy từ value
//  số tiền = lấy từ value
//  cách tính ngày * tiền lương

document.getElementById("btnB1").onclick = function() {
    var Num1B1 = document.getElementById("inputNum1B1").value;
    var Num2B1 = document.getElementById("inputNum2B2").value;
    var KQB1 = 0;
    KQB1 = Num1B1 * Num2B1;
    document.getElementById("txtB1").innerHTML = KQB1;
};
// // bài 2 tính trung bình
// // lấy value từ 5 số nhập vào
//   kết qua lấy 5 số cộng laij chia cho 5
document.getElementById("btnB2").onclick = function() {
    var Num1B2 = Number(document.getElementById("num1B2").value);
    var Num2B2 = Number(document.getElementById("num2B2").value);
    var Num3B2 = Number(document.getElementById("num3B2").value);
    var Num4B2 = Number(document.getElementById("num4B2").value);
    var Num5B2 = Number(document.getElementById("num5B2").value);
    var KQB2 = 0;
    KQB2 = (Num1B2 + Num2B2 + Num3B2 + Num4B2 + Num5B2) / 5;
    document.getElementById("txtB2").innerHTML = KQB2;
};
// bài 3 Tính USB to VNĐ
//     // số tiền USD  lấy từu value inout
//     // Giá trị USD  = 23500
//     tổng tiền bằng  số USD * giá trị
document.getElementById("btnB3").onclick = function() {
    var Num1B3 = Number(document.getElementById("num1B3").value);
    var US = 23500;
    var KQB3 = 0;
    KQB3 = Num1B3 * US;
    document.getElementById("txtB3").innerHTML = KQB3;
};
// //     bài 4 tính chu vi hình chử nhật
// //     chiều dài từ value input
// //     rộng từ value input
// //     công thức (dai + rong ) * 2
document.getElementById("btnB4").onclick = function() {
    var day = Number(document.getElementById("num1B4").value);
    var rong = Number(document.getElementById("num2B4").value);
    var KQB4 = 0;
    KQB4 = (day + rong) * 2;
    document.getElementById("txtB4").innerHTML = KQB4;
};
// // bài 5 tổng 2 ký số
// // cho số 35
// // hàng đơn vị lấy số chi 10 lấy phàn dư
// // hàng chục lấy số chi 10 ;
//   cộng 2 số trên lại
document.getElementById("btnB5").onclick = function() {
    var number = Number(document.getElementById("num1B5").value);
    var chuc = Math.floor(number / 10);
    var donvi = number % 10;
    var KQB5 = 0;
    KQB5 = chuc + donvi;
    document.getElementById("txtB5").innerHTML = KQB5;
};