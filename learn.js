//membuat variabel
let myNumber=16;
let myString="Hello";
let myBoolean=true;
const phi=3.14;
//menampilkan informasi ke console
console.log(myNumber);
console.log(myString);
console.log(myBoolean);
console.log(phi);
//menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah : "+myNumber);
window.alert('Angka favorit saya adalah : '+myNumber);
window.alert('Angka favorit saya adalah : ${myNumber}');
//melakukan operasi sederhana dengan operator aritmatika
let x = 8
let y = 4
console.log(x , y)//menampilkan value dari x & y
console.log('x + y =',x + y)//menampilkan hasi pejumlahan
console.log('x + y =',x - y)//menampilkan hasil pengurangan
console.log('x * y =',x * y)//menampilkan hasil perkalian
console.log('x / y =',x / y)//menampilkan hasil pembagian
console.log('x % y =',x % y)//menampilkan hasil sisa bagi
console.log('x ++ =',x++)//menampilkan hasil dari postfix increment
console.log('++x =',++x)//menampilkan hasil dari prefix increment
console.log('x-- =',x--)//menampilkan hasil dari postfix decrement
console.log('--x =',--x)//menampilkan hasil dari prefix decrement

//melakukan operasi sederhana dengan operator perbandingan 
let a = 12
let b = 6
console.log( a, b )//menampilkan value dari x & b
console.log('a > b =', a > b)//menampilkan hasil Greater than
console.log('a < b =', a < b)//menampilkan hasil Less than
console.log('a >= b =', a >= b)//menampilkan hasil Greater than equal to
console.log('a <= b =', a <= b)//menampilkan hasil Less than equal to
console.log('a == b =', a == b)//menampilkan hasil equal to
console.log('a != b =', a != b)//menampilkan hasil Not equal to
console.log('a ==== b =', a === b)//menampilkan hasil Equal value and equal type
console.log('a !== b =', a !== b)//menampilkan hasil Not equal value and not equal type to

//melakukan operasi sederhana dengan operator logika
console.log('true && ture =',true && true)//menampilkan hasil Logical And true dengan true
console.log('true && false =',true && false)//menampilkan hasil Logical And true dengan false
console.log('false && ture =',false && true)//menampilkan hasil Logical And false dengan true
console.log('false && false =',false && false)//menampilkan hasil  Logical And false dengan false
console.log('true || ture =',true || true)//menampilkan hasil  Logical Or true dengan true
console.log('true || false =',true || false)//menampilkan hasil Logical Or true dengan false
console.log('false || ture =',false || true)//menampilkan hasil Logical Or false dengan true
console.log('false || false =',false || false)//menampilkan hasil Logical Or false dengan false
console.log('!true =', !true)//menampilkan hasil Logical Not dari true
console.log('!false =', !false)//menampilkan hasil Logical Not dari false

//membuat fungsi
function luas_persegi(s) {//membuat fungsi untuk luas persegi dengan 1 parameter (s)
    let persegi = s*s;//membuat variabel dari luas persegi 
    console.log('luas persegi =',persegi);//menampilkan hasil dari luas persegi
}
function luas_segitiga(a,t) {//membuat fungsi untuk luas segitiga dengan 2 parameter (a, t)
    let segitiga = 0.5 * a * t;//membuat variabel dari luas segitiga
    console.log('luas segitiga =',segitiga);//menampilkan hasil dari luas segitiga
}
function volume_balok(p,l,t) {//membuat fungsi untuk volume balok dengan 3 parameter (p, l, t)
    let balok = p * l * t;//membuat variabel dari volume balok
    console.log('volume balok =',balok);//menampilkan hasil dari volume balok
}


luas_persegi(4); //memanggil fungsi luas_persegi
luas_segitiga(5,10); //memanggil fungsi luas_segitia
volume_balok(12,7,5); //memanggil fungsi volume_balok