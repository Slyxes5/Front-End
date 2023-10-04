//buatlah fungsi yang menerima satu input berupa angka
//dan mengembalikan string apakah angka yang dimasukkan 
//adalah bilangan positif atai negatif

function isNumber(number){
    if (number > 1){
        console.log(number,"bilangan positif")
    }
    else{
        console.log(number, "bliangan negatif")
    }
}
isNumber(5)
isNumber(-2)