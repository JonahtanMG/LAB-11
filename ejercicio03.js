let contadorPar = 0, contadorImpar = 0;

for (let i = 0; i < 10; i++){
    let numero = parseFloat(prompt("Ingrese un número"));
    if(numero % 2 == 0) contadorPar++;
    else contadorImpar++;
}

console.log("Números pares: "+contadorPar);
console.log("Números impares: "+contadorImpar);