// soal 1 luas segitiga
// function calculateTriangleArea(alas, tinggi) {
//     return 0.5 * alas * tinggi;
// }

// let alas = Number(prompt("masukan bilangan Alas:"));
// let tinggi = Number(prompt("masukan bilanngan Tinggi:"));

// const luas = calculateTriangleArea(alas, tinggi);
// alert(`maka luas segitiga adalah : ${luas}`)



// soal 2 keliling lingkaran
// function calculateCircleCircumference(jarijari) {
//     // Keliling = 2×π×r
//     return 2 * Math.PI * jarijari;
// }

// let jarijari = Number(prompt("Masukkan jari-jari lingkaran:"));
// const keliling = calculateCircleCircumference(jarijari);
// alert(`Maka keliling lingkaran adalah: ${keliling}`);



// soal 3 bilangan prima
// function isPrime(x) {
//     if (x <= 1) return false;
//     if (x <= 3) return true;
//     if (x % 2 === 0 || x% 3 === 0)return false; 

//     for (let i = 5; i * i <= x; i += 6){
//         if (x % i === 0 || x % (i + 2) === 0)return false;
//     }

//     return true;
// }

// const x = parseInt(prompt("maasukan bilangan positif:"));
// if (isPrime(x)){
//     alert(`${x} adalah bilangan prima`);
// }else {
//     alert(`${x} bukan bilangan prima`)
// }