var listitem=[
    {
        id: 1,
        name: "san pham 1",
        img: "../img/Screenshot 2023-08-21 140245.png",
        content: "test",
        price: 100000
    },
    {
        id: 2,
        name: "san pham 2",
        img: "../img/Screenshot 2023-08-21 140245.png",
        content: "test",
        price: 400000
    },
    {
        id: 3,
        name: "san pham 3",
        img: "../img/Screenshot 2023-08-21 140245.png",
        content: "test",
        price: 300000
    },
    {
        id: 4,
        name: "san pham 4",
        img: "../img/Screenshot 2023-08-21 140245.png",
        content: "test",
        price: 200000
    }
]

function showitem(size) {
    $('#list-item').html('');
    for (let i = 0;i < size && i < listitem.length; i++) {
        var item=`<div class="col-3">
                <div class="card" >
                    <img class="w-100" src="${listitem[i].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${listitem[i].name}</h5>
                    <p class="card-text">${listitem[i].content}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
               </div>`;
        $('#list-item').append(item);
    }
}

function search() {
    var title=$(".search").val();
    $('#list-item').html('');
    for (let i = 0;i < listitem.length; i++) {
        //includes: "chuỗi giá trị".includes("giá trị so sánh")
        //convert string: uper/lower
        //"dev master" !="dev   master" => replaceAll(" ","")
        // if (listitem[i].name== title)
        if (listitem[i].name.includes(title)) {
            var item=`<div class="col-3">
                    <div class="card" >
                        <img class="w-100" src="${listitem[i].img}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${listitem[i].name}</h5>
                        <p class="card-text">${listitem[i].content}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                   </div>`;
            $('#list-item').append(item);
        }
    }
}
function searchprice() {
    debugger
    var searchprice=$(".searchprice").val();
    $('#list-item').html('');
    for (let i = 0;i < listitem.length; i++) {
        if (listitem[i].price <= parseInt(searchprice)) {
            var item=`<div class="col-3">
                    <div class="card" >
                        <img class="w-100" src="${listitem[i].img}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${listitem[i].name}</h5>
                        <p class="card-text">${listitem[i].content}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                   </div>`;
            $('#list-item').append(item);
        }
    }
}