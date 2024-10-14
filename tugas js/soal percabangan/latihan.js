function calculator(){
let bilangan1 = Number(prompt("masukan bilanngan pertama"));
let operator = (prompt("masukkan operator (+,-,*,/):"));
let bilangan2 = Number(prompt("masukan bilanngan kedua"));

let result;

if (operator == '+'){
   result = bilangan1 + bilangan2;
}else if (operator == '-'){
    result = bilangan1 - bilangan2;;
}else if (operator == '*'){
    result = bilangan1 * bilangan2;
}else if (operator == '/'){
    if (bilangan2 === 0) {
        alert("eror tidak membagi dengan 0");
        return;
    }
    result = bilangan1 / bilangan2;
}else{
    alert('tidak di temukan');
}
alert("hasil :"  + result);
}

calculator();
