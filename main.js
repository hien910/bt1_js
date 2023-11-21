// bài 1
function calculateFactorial(n){
    
    if(n<0){
        console.log("Không thể tính giai thừa cho số âm")
        return "Không thể tính giai thừa cho số âm"
    }else if(n==0 || n==1){
        return 1;
    } else{
        let result=1;
    for(let i=2; i<=n; i++){
        result *= i;
    }
    return result;
    }
};
console.log(calculateFactorial(9));

// Bài 2
function daoNguocChuoi(chuoi){
    let chuoiDaoNguoc='';
    for(let i = chuoi.length-1; i>=0; i--){
        chuoiDaoNguoc += chuoi[i];
    }
    return chuoiDaoNguoc;
};
console.log(daoNguocChuoi("chuoiNhap"));

// Bài 3
function translate(input){
    switch (input){
        case "VN": 
            console.log("xin chào");
            break;
        case "EN":
            console.log("Hello");
            break;
        case "JP":
            console.log("Ko chi ni wa");
            break;
        case "CN":
            console.log("Ni hao");
            break;
        case "DE":
            console.log("Halo");
            break;
        default :
        return "Không xác định";
    }
};
console.log(translate("DE"));


// Bài 4
function catChuoi(chuoi){
    let chuoiCat='';
    
    for(let i = 0; i<=9; i++){
        chuoiCat += chuoi[i];
    }
    chuoiCat += '...'
    return chuoiCat;
};
console.log(catChuoi("xinchaocacbandenvoiTechmaster"))