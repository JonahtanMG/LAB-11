let salir = true;
//SE USA SALIR PARA ROMPER EL BUCLE
while(salir){
    let elegir = prompt("Eliga entre: \n1:Calcular estadisticas de N notas \n2:Contar números pares e impares en un rango \n3:Generar tabla de multiplicar \n4:Salir")
    switch (elegir) {
        case "1":
            let cantidad = parseFloat(prompt("Ingrese una cantidad de notas a evaluar"));
            let promedio = 0, suma = 0, maximo = 0, minimo = 0, pares = 0, impares = 0, encimaPromedio = 0;
            let notas = new Array(cantidad);
            for(let i = 0; i < cantidad; i++){
                notas[i] = parseFloat(prompt("Ingrese la nota"));
                suma += notas[i];
            }
            //SE EVALUA LAS ESTADISTICAS CON EL ARRAY DE NOTAS
            promedio = suma/cantidad;
            minimo = notas[0];
            for(let i = 0; i < notas.length; i++){
                if(minimo > notas[i])minimo = notas[i];
                if(maximo < notas[i])maximo = notas[i];
                if(notas[i]%2==0)pares++;
                else impares++;
                if(notas[i]>promedio)encimaPromedio++;
            }
            //SE IMPRIME Y SE CONTINUA CON EL PROGRAMA
            console.log("El promedio es: "+promedio);
            console.log("El maximo es: "+maximo+", el minimo es: "+minimo);
            console.log("Hay "+pares+" pares y "+impares+" impares");
            console.log("Por encima del promedio hay: "+encimaPromedio);
            continue;
        case "2":
            let min = parseFloat(prompt("Ingrese un número"));
            let max = parseFloat(prompt("Ingrese un número mayor"));
            let par = 0, impar = 0;
            for(let i = min; i <= max; i++){
                if(i%2==0)par++;
                else impar++;
            }
            //SE IMPRIME Y SE CONTINUA CON EL PROGRAMA
            console.log("Hay "+par+" pares y "+impar+" impares");
            continue;
        case "3":
            let numero = parseFloat(prompt("Ingrese un número"));
            for(let i = 1; i <= 12; i++){
                console.log(numero+" x "+i+" = "+(numero*i));
            }
            //SE CONTINUA CON EL PROGRAMA
            continue;
        case "4":
            //ESTO ROMPERA EL BUCLE
            salir = false;
            break;
        default:
            alert("Ingrese un número correcto");
    }
}