while(true){
    let numero = prompt("Ingrese un número");
    let suma = 0;
    //SE EXTRAE EL DIGITO DEL NUMERO Y SE ELEVA A LA N
    for(let i = 0; i < numero.length; i++){
        let evaluar = parseFloat(numero.charAt(i));
        suma += Math.pow(evaluar, numero.length);
    }
    if(suma == parseFloat(numero)){
        console.log("El número es de Armstrong, su suma es: "+suma);
    }else console.log("El número no es de Armstrong, su suma es: "+suma);
    //ITERATIVIDAD
    let seguir = prompt("¿Quieres probar otro número?");
    if(seguir == "NO") break;
}   