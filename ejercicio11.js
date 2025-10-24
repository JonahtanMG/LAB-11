let suma = 0;
while(true){
    //SE INGRESA EL PRECIO
    let precio = parseFloat(prompt("Ingrese el precio del producto"));
    suma += precio;
    //PARTE ITERATIVA
    let seguir = prompt("¿Quieres agregar otro producto? SI/NO");
    if(seguir == "NO")break;
}
//SE MUESTRA EL PRECIO Y SI HAY DESCUENTO, DE HABERLO SE MUESTRA EL PRECIO FINAL
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