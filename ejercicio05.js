while(true){
    let monto = parseFloat(prompt("Ingrese un monto a retirar"));
    let billete100 = 0, billete50 = 0, billete20 = 0, billete10 = 0;
    //BILLETES DE 100
    billete100 = Math.floor(monto/100);
    monto = monto-(billete100*100);
    //BILLETES DE 50
    billete50 = Math.floor(monto/50);
    monto = monto-(billete50*50);
    //BILLETES DE 20
    billete20 = Math.floor(monto/20);
    monto = monto-(billete20*20);
    //BILLETES DE 10
    billete10 = Math.floor(monto/10);
    monto = monto-(billete10*10);

    console.log("Recibira "+billete100+" billetes de 100");
    console.log("Recibira "+billete50+" billetes de 50");
    console.log("Recibira "+billete20+" billetes de 20");
    console.log("Recibira "+billete10+" billetes de 10");

    let seguir = prompt("¿Quieres sacar más dinero? SI/NO");
    if(seguir == "NO")break;
}