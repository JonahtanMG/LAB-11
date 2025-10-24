while(true){
    let numero = parseFloat(prompt("Ingrese un número"));
    let suma = 0;
    for(let i = 1; i <= numero; i++){
        if(i%5!=0)suma +=i;
    }
    console.log("La suma de los números que no son multiplo de 5 es: "+suma);
    let seguir = prompt("¿Quieres seguir? SI/NO");
    if(seguir == "NO")break;
}