while(true){
    let numero = parseFloat(prompt("Ingrese un número"));
    //MULTIPLICACION
    for (let i = 1; i <= 12; i++){
        let multiplicacion = numero * i;
        console.log(numero+" x "+i+" = "+multiplicacion);
    }
    //ITERATIVIDAD
    let seguir = prompt("¿Quieres probar otro número? SI/NO");
    if(seguir == "NO") break;
}