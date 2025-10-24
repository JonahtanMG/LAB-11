let suma = 0;
let limite = parseFloat(prompt("Ingrese un presupuesto"));
while(true){
    //SE INGRESA EL PRECIO
    let precio = parseFloat(prompt("Ingrese el precio del producto"));
    //SE COMPRUEBA QUE NO SE EXCEDA EL PRESUPUESTO
    if(limite < suma + precio){
        alert("Se excedio del presupuesto, termine la compra o eliga un producto más barato");
    }else suma += precio;
    //SE GENERA UN RESTO DEL PRESUPUESTO
    let restoPresupuesto = limite - suma;
    //SI EL PRESUPUESTO ES IGUAL A 0 SE CIERRA EL PROGRAMA
    if(restoPresupuesto==0){
        alert("Se quedo sin presupuesto");
        break;
    }
    let seguir = prompt("¿Quieres agregar otro producto? SI/NO Presupuesto restante: "+restoPresupuesto);
    if(seguir == "NO")break;
}

console.log("El precio total es: "+suma);
if(suma > 100){
    suma = suma*90/100;
    console.log("Tienes un descuento del 10%, el precio final es: "+suma);
}else if(suma <= 100 && suma >= 50){
    suma = suma*95/100;
    console.log("Tienes un descuento del 5%, el precio final es: "+suma);
}else {
    console.log("No se aplica descuento, el precio final es: "+suma);
}