
let suma = 0, promedio = 0;
for (let i = 0; i < 5; i++) {
    let nota;
    //VALIDACION DE LA NOTA
    while (true) {
        nota = parseFloat(prompt("Ingrese su nota (0-20)"));
        if (nota >= 0 && nota <= 20) {
            break; 
        } else {
            alert("Por favor, ingrese una nota válida entre 0 y 20");
        }
    }
    suma = suma + nota;
}

promedio = suma/5;

console.log("El promedio es: " + promedio);