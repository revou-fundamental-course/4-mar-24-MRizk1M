const form = document.querySelector('form');
//Menambahkan listener untuk tombol submit
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //variabel
    const umur = parseInt(document.querySelector('#tbUmur').value);
    const tinggi = parseInt(document.querySelector('#tbTinggi').value);
    const berat = parseInt(document.querySelector('#tbBerat').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');
    //validasi form
    if ((tinggi === '') || (tinggi < 0) || (isNaN(tinggi))) {
        //NaN !== NaN
        results.innerHTML = "Masukkan tinggi anda dengan benar!";

    } else if (berat === '' || berat < 0 || isNaN(berat)) {
        results.innerHTML = "Masukkan Berat anda dengan benar!";

    } else if (umur === '' || umur < 0 || isNaN(umur)) {
        results.innerHTML = "Masukkan umur anda dengan benar!";

    } else {
        // Calculate BMI
        const imt = (berat / ((tinggi * tinggi) / 10000)).toFixed(2);
        // menampilkan hasil perhitungan BMI results
        results.innerHTML = `<span>${imt}</span>`

        // Menampilkan hasil
        if (imt < 18.6) {
            message.innerHTML = "Berat badan anda kurang";
        } else if (imt > 18.5 && imt < 24.9) {
            message.innerHTML = "Berat badan anda normal"
        } else if (imt > 24.9 && imt < 29.9) {
            message.innerHTML = "Berat badan anda kelebihan"
        } else if (imt > 29.9) {
            message.innerHTML = "Anda obesitas"
        }

    }

});
