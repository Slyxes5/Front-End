(function() {
    function checkNumber(num, callback) {
        if (num > 0) {
            callback("Bilangan Positif");
        } else {
            callback("Bilangan Negatif");
        }
    }

    const input = parseInt(prompt("Masukkan angka:"));

    checkNumber(input, function(result) {
        console.log(result);
    });
})();
