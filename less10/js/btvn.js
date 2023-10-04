var user=[
    {
        username: "admin",
        password: "1",
    },
    {
        username: "admin2",
        password: "1",
    },
    {
        username: "hieu",
        password: "1",
    },
    {
        username: "hieu2",
        password: "1",
    }
]
function login() {
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var tempproduct=false;
    for (let i = 0; i < user.length; i++) {
        if (user[i].username==username && user[i].password==password) {
            document.write("dang nhap thanh cong")
            tempproduct=true;
        }
        if (user[i].username==null || user[i].password==null) {
            alert("khong duoc bo trong")
            tempproduct=true;
            break;
        }
        if (!tempproduct) {
            alert("sai tai khoang hoac mat khau");
            break;
        }
    }
}