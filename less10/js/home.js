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



    // end less9 start less10


    //mảng
    // dinh nghia: tap hop cac phan tu
    // đánh giấu từ 0 cho tới length-1
    // tuong tac: qua index
    // các hàm tương tác với array: push(); pop();...

    var array3 = [1,2,3,4,5,6,7,8,9,10];
    //yêu cầu khai báo 1 số bất kì và tìm vị trí số đó trong mảng array 3
    var x4=50;
    var temp=false;
    for (let i = 0; i < array3.length; i++) {
        if (parseInt(x4)===array3[i]) {
            console.log(" "+ x4 +" ở vị trí số "+ i);
            temp=true;
        }
    }
    if (temp==false) {
        console.log("không tồn tại giá trị "+ x4 +" trong array3");
    }

    //hàm: function

    // khai báo: 
    // function ten_ham(tham số đầu vào){
    //     thân hàm
    // }

    // sử dụng hàm:
    // ten_ham()

    function summary(a,b) { 
        var total=parseInt(a)+parseInt(b);
        console.log("tổng 2 tham số đầu vào là: "+ total);
    }
    summary(10,4);
    summary(10,"4"); //==> 104

    // các tham số đầu vào có kiểu dữ liệu là tự định nghĩa
    // tham số 1 <==> input 1
    // tham số n <==> input n

    function filter(x5) {
        var temp2=false;
        for (let i = 1; i < array3.length-1; i++) {
            if (parseInt(x5)===array3[i-1]) {
                console.log(" "+ x4 +" ở vị trí số "+ i);
                temp2=true;
            }
        }
        if (temp2==false) {
            console.log("không tồn tại giá trị "+ x5 +" trong array3");
        }
        if (!temp2) {
            console.log("không tồn tại giá trị "+ x5 +" trong array3");
        }
    
    }
    filter(10);

    var demo=["abc",'dev',123,'12124',"js"];
    // btvn viết 1 hàm tìm kiếm cho tập dữ liệu có sẵn bất kì,
    // kiểm tra xem giá trị đầu vào xuất hiện bao nhiêu lần, ở đâu
    // nếu không tồn tại ==> in ra no data

    //end function

    //đối tượng: object

    //định nghĩa: tập hợp thuộc tính ==> đối tượng
    // khai báo:
    var n1={}
    var n2= new Object();
    n2.chieu_cao=160;
    n2.can_nang=55;
    n2.que_quan="ha noi";
    n2.gioi_tinh="nam";
    var n3={
        chieu_cao : 172,
        can_nang : 62,
        que_quan: 'ha noi',
    }

    //array object: JSON
    var arrobj=[n1, n2, n3] // <==>[1,2,3]
    function seach(text) {
        var check=false;
        for (let j = 0; j < arrobj.length; j++) {
            if(text == arrobj[j].que_quan){
                console.log("co ton tai nguoi que o ", text);
                check = true;
            }
        }
        if (!check) console.log("khong ton tai nguoi que o ", text);
    }
    seach('ha noi');

    //end object

    //start DOM
    //khái niệm và mục đích
    //phân loại DOM 
    //syntax using DOM
    //DOM ELEMENT
    //DOM ID
    //DOM CLASS
    //DOM ...

    function showValueInput() {
        var y =document.getElementById('username').value;
        console.log("demo username: ",y);
    }

    var listproduct=[
        {
            id: 1,
            name: "đồng hồ",
            price: 3000000,
            cate: 1
        },
        {
            id: 2,
            name: "nhẫn",
            price: 3000000,
            cate: 2
        },
        {
            id: 3,
            name: "quần áo",
            price: 3000000,
            cate: 3
        },
        {
            id: 4,
            name: "điện thoại",
            price: 3000000,
            cate: 4
        }
    ]
    function seachproduct() {
        var name=document.getElementById('productname').value;
        var tempproduct=false;
        for (let i = 0; i < listproduct.length; i++) {
            if (listproduct[i].name==name) {
                console.log("ton tai phan tu trung name= ", listproduct[i]);
                tempproduct=true;
            }
            if (!tempproduct) {
                console.log("no data");
            }
        }
    }

    // btvn tạo list user (array object)
    // dùng lại form đăng nhập bắt sự kiện khi click nút login => lấy ra giá trị 2 ô input username, pass
    // so sánh giá trị người dùng nhập với tập dữ liệu listuser
    // nếu có =>...
    // nếu không =>...
    // nếu người dùng bỏ trống ô input thì thông báo