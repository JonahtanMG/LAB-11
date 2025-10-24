while(true){
    let elegir = prompt("Escriba: \n1:Calcular área del circulo \n2:Calcular área del rectangulo \n3:Salir");
    if(elegir == "1"){
        let medida = parseFloat(prompt("Ingrese el radio: "));
        let radio = medida * medida * 3.14;
        console.log("El radio es: "+radio);
    }else if(elegir == "2"){
        let lado = parseFloat(prompt("Ingrese el lado del rectangulo"));
        let ancho = parseFloat(prompt("Ingrese el ancho del rectangulo"));
        let area = lado * ancho;
        console.log("El área es: "+area);
    }else if(elegir == "3")break;
    else alert("Ingrese un número valido");
}