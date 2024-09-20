// alert('halo ganteng');
// alert('udah makan blm?');
// alert('kalo blm makan ya?');

// var nama = prompt('masukan nama:');
// alert(nama);

// sintaks aslinya prompt('masukan nama');
// beda nya sma alert yg ini ada text box nya yg bisa diisi user
// bisa juga menambah kan variabel nama untuk menyimpan apa yg di ketik user

// confirm('kamu yakin??');

// bedanya kalo confirm itu ada tombol cancel/ok yg bisa di pilih user 
// biasanya di gunakan untuk mrnghapus database sehingga user bisa meminimalisir kepencet
// mengembalikan nilai boolen true/false (true klo menekan tombol oke dan false ketika menekan tombol cancel)

alert('oke untuk botak')
alert('batal untuk mullet')

var test = confirm('alien botak apa mullet??');
if( test === true ) {
    alert('botak');
    alert('emang iya botak?');
    var nama = prompt('kenapa botak?');
    alert(nama);
    alert('ang ang ang lucu bgt di ludahin boleh ngga sih');
} else {
    alert('mullet');
    alert('emang iya mullet?');
    var nama = prompt('kenapa mullet?');
    alert(nama);
    alert('ang ang ang lucu bgt di ludahin boleh ngga sih');
}

// alert(test)
// confrim ini biasa kita gunakan nanti nya klo kita belajar pengkondisian/pengulangan