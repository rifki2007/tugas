// soal 1 //

// function person(firstname,lastname,age){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;

//     this.showdetails =function(name){
//        console.log(`hello ${name},my name is ${this.firstname , this.lastname} my age ${this.age}`);
//     }
// }

// const subi= new person("muhammad","subi","30");
// subi.showdetails("everyone")

// const aan= new person("anjay","aan","100");
// aan.showdetails("eka");

// soal 2 //

// function PersegiPanjang(panjang, lebar){
//     this.panjang = panjang;
//     this.lebar = lebar;

//     this.luas = function(){
//         console.log(this.panjang * this.lebar);
//     }
//     this.keliling = function(){
//         console.log(2 *(this.panjang + this.lebar));
//     }
// }

// let persegiPanjang2 = new PersegiPanjang(10,10);
// persegiPanjang2.luas();
// persegiPanjang2.keliling();

// soal 3 //

class rekening {
    constructor (norek,saldo){
    this.saldo = saldo;
    this.norek = norek;
}

setorTunai(nominal){
    return(this.saldo = nominal + this.saldo)
}
tarikTunai(nominal){
    return(this.saldo = nominal + this.saldo)
 }
}

let o = new rekening (123459, 50000);
console.log(o.setorTunai(10000));
console.log(o.tarikTunai(20000));

let p = new rekening (12345, 1000000);
console.log(p.setorTunai(100000));
console.log(p.tarikTunai(10000));

let r = new rekening (12345, 9000000);
console.log(r.setorTunai(10000));
console.log(r.tarikTunai(10000));

// soal 4 //

// class person{
//     constructor(firstname,lastname,age) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
// }

//     showdetails(name){
//        console.log(`hello ${name},my name is ${this.firstname , this.lastname} my age ${this.age}`);
//     }
// }

// const subi= new person("muhammad","subi","30");
// subi.showdetails("everyone");

// const aan= new person("anjay","aan","100");
// aan.showdetails("eka");

// soal 5 //

// class PersegiPanjang{
// constructor(panjang,lebar){
//     this.panjang = panjang;
//     this.lebar = lebar;
// }
//     luas(){
//         console.log(this.panjang * this.lebar);
//     }
//     keliling(){
//         console.log(2 *(this.panjang + this.lebar));
//     }
// }

// const persegiPanjang = new PersegiPanjang(10,10);
// persegiPanjang.luas();
// persegiPanjang.keliling();