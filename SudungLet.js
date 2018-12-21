//khai bao bien toan cục
let x = 100;
console.log("value of the let available"+x); //xuất giá trị kiểu let


function myFunc(){
    //khai bao biến cục bộ
    let y =99;//khai bao bien let trong phạm vi hàm
    var A = "HelloWorld";
    x+=22;
    console.log( "value in the function: "+x);
}
myFunc();//goi ham

//khôg thể truy cập tư ngoài phạm vi của biến var và let ra ngoài hàm
console.log("value of let in the function: "+y);//không thể truy xuất biến cục bộ từ ngoài phạm vi ==> lỗi
console.log(A);//truy xuất biến var cục bộ từ ngoài phạm vi  ==>lỗi
