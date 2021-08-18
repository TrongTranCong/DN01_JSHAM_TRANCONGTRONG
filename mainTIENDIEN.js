/**
 * Demo tinhTienDien
 * 
 * Block1: Inputs
 * ten
 * tieuThu
 * 
 * Block2:
 * Khai báo biến và nhận giá trị từ Form
 * Sử dụng hàm và câu lệnh điều kiện If else
 * 
 
 * Block3: Outputs
 * tinhTien
 * 
 */

/**
 * Global Variable
 */
const KW50_DAU = 500;
const KW50_KE = 650;
const KW100_KE = 850;
const KW150_KE = 1100;
const KWCONLAI = 1300;

function tinhTheoKW(soTieuThu,giaKW50Dau,giaKW50Ke,giaKW100Ke,giaKW150Ke,giaKWConLai){
    var soTieuThu = document.getElementById("inputTieuThu").value;
    console.log(soTieuThu);
    var tienTheoKW = 0;
    if (soTieuThu <=50){
        tienTheoKW = soTieuThu*giaKW50Dau;
        console.log(tienTheoKW);
    }else if(soTieuThu >50 && soTieuThu <=100){
        tienTheoKW = 50*giaKW50Dau + (soTieuThu - 50 )*giaKW50Ke;
        console.log(tienTheoKW);
    }else if(soTieuThu >100 && soTieuThu <=200){
        tienTheoKW = 50*(giaKW50Dau + giaKW50Ke) + (soTieuThu - 100)*giaKW100Ke;
        console.log(tienTheoKW);
    }else if(soTieuThu >200 && soTieuThu <=350){
        tienTheoKW = 50*(giaKW50Dau + giaKW50Ke) + 100*giaKW100Ke + (soTieuThu - 200)*giaKW150Ke;
        console.log(tienTheoKW);
    }else if(soTieuThu > 350){
        tienTheoKW = 50*(giaKW50Dau + giaKW50Ke) + 100*giaKW100Ke + 150*giaKW150Ke + (soTieuThu - 350)*giaKWConLai;
        console.log("tienTheoKW");
    }else{
        alert("Vui long nhập số tiêu thụ")
    }  
    return tienTheoKW;
}

function tinhTien(){
    var ten = document.getElementById("inputTen").value;
    console.log(ten);
    var soTieuThu = document.getElementById("inputTieuThu").value;
    var tongTien = 0;
    tienTheoKW = tinhTheoKW(soTieuThu,KW50_DAU,KW50_KE,KW100_KE,KW150_KE,KWCONLAI);
    tongTien = tienTheoKW;
    console.log(tongTien);
    document.querySelector("#hienthi").innerHTML = "Tên hộ: "+ ten + "<br>" + "Số tiền: " + (new Intl.NumberFormat('VI', { style: 'currency', currency: 'VND' }).format(tongTien));
}
document.querySelector("#btnTinh").onclick = tinhTien;


