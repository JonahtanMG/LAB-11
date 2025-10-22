let edad = parseFloat(prompt("Ingrese su edad"));

if(edad < 12) console.log("Es un niño");
else if(edad >=12 && edad <= 17) console.log("Es un adolescente");
else if(edad >=18 && edad <=59) console.log("Es un adulto");
else console.log("Es un adulto mayor");