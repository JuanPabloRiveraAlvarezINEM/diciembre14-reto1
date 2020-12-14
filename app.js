let caracter = 'x'
let caja = document.getElementById("arbol");
let num = 1;
for(let i = 0; i<50; i++){
    for(let j = 0; j<num;j++){
        document.getElementById("arbol").innerHTML = caracter;
    }
    num = num +2
}