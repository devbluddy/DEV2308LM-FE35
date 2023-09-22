// 1 biên 
// khai báo: số, chuỗi, ngày tháng ... 
// int x=5;
// var tên_biến = giá trị biến
// giá trị => quy định kiểu dữ liệu của biến
// value = số ==> datatype: só
//value = chữ ==> datatype: chữ
var a1 = 100;
var a2 = "dev";
//2 toán tử
//      các phép số học: +, -, *, /, %

var x1= 10;
var x2= "50";
var x3= x1 + x2;
// ==> quy tắc phép cộng
// số + sô= số
// chuỗi + chuỗi = chuỗi
// số + chuỗi= chuỗi

console.log("giá trị của x3 la ", x3);
console.log("giá trị của x3 la "+ x3);

// các phép toán logic 
// so sánh: ==, >, <, >=, <=, ===
// điều kiện: &&, ||, !

// khai báo hai số nguyên bất kì tính hiệu số lớn trừ số bé
// 2,cấu trúc điều kiện
// if-else; switch - case
// cú pháp ; đầy đủ, khuyết thiếu, lồng
// if (điều kiện){
//     các câu lệnh js se được thực thi nếu điều kiện == true;
// } else {
//     các câu lệnh js se được thực thi nếu điều kiện == false;
// }

var st1= 50;
var st2= 100;
var hieu;
if(st1 > st2)
    hieu=st1-st2;
else 
    hieu= st2-st1;
console.log("hieu 2 so la ", hieu)

// bien luan phuong trinh bac nhat 1 an 
 var a=10;
 var b= 100;
 if (a == 0){
    if (b==0){
        console.log("phuong trinh vo so nghiem");
    }else console.log("phuong trinh vo nghiem");
 }else {
        console.log("phuong trinh co nghiem la: ", -b/a);
 }
//  khai bao c1 c2 c3 la 3 canh cua 1 tam giac
//  bien luan cac truong hop cua tam giac
 var c1=1;
 var c2=2;
 var c3=3;

 if ( c1==c2 && c2==c3){
    console.log("tam giac la tam giac deu");
}
else if (c1==c2 || c2==c3 || c1==c3){
    console.log("tam giac la tam giac can");
} else
console.log("tam giac la tam giac thuong");

// bien luan phuong trinh bac 2 1 an

// swicth-case

//vong lap va mang
//for, while, do-while
//cu phap
//for(dem;dieu kien;action){
//     than for:js
//}
// mang
// khai niem: tap hop cai phan tu (bat ki)
// dac diem:  moi phan tu duoc danh index tu 0 cho den cuoi-1
//            tuong tac voi cac phan tu qua index: ten_mang[index]
// khai bao:
    var array = new Array();
    var array2 = [1,2,3,"4","5"];
    console.log("phan tu co index=4 co gia tri la: ", array2[4]);
    var x= array2[2];
    var xx= array2[3];
    for(var i=0; i<array2.length;i++){
        console.log(array2[i]);
    }
    var arrnum = [1,2,3,"4","5"];
    var sum=0;
    for(var i=0; i<arrnum.length;i++){
        sum += parseInt(arrnum[i]);
    }
    console.log("tong cua mang la ",sum);
    // btvn tinh tich tat ca cac phan tu 
    //           tong va tich cac phan tu o vi tri chan