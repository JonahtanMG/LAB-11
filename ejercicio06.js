
while(true){
    let numero = parseFloat(prompt("Ingrese un número"));
    let primos = "";
    
    for(let i = 2; i <= numero; i++){
        let probar = i;
        let esPrimo = true;
        for(let j = 2; j <= Math.sqrt(probar); j++){
            if(probar%j==0) esPrimo=false;
        }
        if(esPrimo==true){
            primos += probar+" ,";
        }
    }
    //ESTO ARREGLA EL STRING, SI NO QUEDARIA "..,2 ,"
    primos = primos.substring(0,primos.length-2);
    console.log("Los primos entre 1 y "+numero+" son: "+primos);  
    
    let seguir = prompt("¿Quieres seguir? SI/NO");
    if(seguir == "NO")break;
}