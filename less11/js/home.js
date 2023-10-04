//cu phap su dung jquery
//$('selecter').action()
var listproduct=[
    {
        id: 1,
        name: "dong ho 1",
        price: 8000000,
        pricetemp: "8.000.000",
        cate: "phu kien",
        number: 0,
        img: 'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Ft%2Fbt.gallant.png&w=640&q=75'
    },
    {
        id: 2,
        name: "dong ho 2",
        price: 9000000,
        pricetemp: "9.000.000",
        cate: "phu kien",
        number: 0,
        img: 'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Ft%2Fbt.calm.png&w=640&q=75'
    },
    {
        id: 3,
        name: "dong ho 3",
        price: 18000000,
        pricetemp: "18.000.000",
        cate: "phu kien",
        number: 0,
        img: 'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=640&q=75'
    },
    {
        id: 4,
        name: "dong ho 4",
        price: 8000000,
        pricetemp: "8.000.000",
        cate: "phu kien",
        number: 0,
        img: 'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Ft%2Fbt.gallant.png&w=640&q=75'
    },
    {
        id: 5,
        name: "dong ho 5",
        price: 9000000,
        pricetemp: "9.000.000",
        cate: "phu kien",
        number: 0,
        img: 'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Ft%2Fbt.calm.png&w=640&q=75'
    },
    {
        id: 6,
        name: "dong ho 6",
        price: 18000000,
        pricetemp: "18.000.000",
        cate: "phu kien",
        number: 0,
        img: 'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=640&q=75'
    }
]

for (let i = 0; i < listproduct.length; i++) {
    var view = `    <div class="item item-card-${listproduct[i].id}">
                <div class="item-img">  
                    <img class="w-100" src="${listproduct[i].img}" alt="">
                </div>
                <div class="item-content">
                    <div class="item-cate">
                        <h3>${listproduct[i].cate}</h3>
                    </div>
                    <div class="item-name">
                        <h4>${listproduct[i].name}</h4>
                    </div>
                    <div class="item-price">
                        <p><span class="price" data-price="${listproduct[i].price}">${listproduct[i].pricetemp}</span>
                        <span class="unit">vnd</span></p>
                    </div>
                </div>
                <div class="item-sl">
                    <input type="number" onchange="blockbottom('item-card-${listproduct[i].id}')"  name="sl" value="${listproduct[i].number}" class="sl">
                </div>
                </div>  ` ;

    $('.list-item').append(view);
}
function sumary()  {
    var sum=0;
    for (let i = 0; i < listproduct.length; i++) {
        var x= $('.item-card-' + listproduct[i].id + ' .sl').val();
        // var y=$('.item-card-' + i + ' .item-price .price').text().replaceAll(".","");
        var p=$('.item-card-' + listproduct[i].id + ' .item-price .price').attr('data-price');
        var s=parseInt(x) * parseInt(p);
        sum +=s;
    }
    $('.sum-product .text-price .all-price').text(sum);
}
function blockbottom(className) {
    var number= $('.' + className + ' .sl').val();
    if (number<=0){
        $('.' + className + ' .sl').val(0);
        return;
    }
}


//btvn tao danh sach tin tuc(arrayobject)
//hien thi all tin tuc len giao dien voi cac tham so tuong ung voi thuoc tinh