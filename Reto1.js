function juego(eleccionUsuario){
    var opciones = ["Piedra","Papel","Tijeras"];
    var opcionHumano = opciones[eleccionUsuario];
    var opcionMaquina = opciones[Math.floor(Math.random() * 3)];

    if(opcionHumano === opcionMaquina)
    {
        console.log(`Empate:  la máquina escogió ${opcionMaquina} y tú elegiste ${opcionHumano}`);
    }
    else{
        switch (opcionHumano) {
            case "Piedra":
                if(opcionMaquina === "Papel")
                {
                    console.log(`Lo sentimos, la máquina ganó, escogió ${opcionMaquina} y tú elegiste ${opcionHumano}`);
                }
                if(opcionMaquina === "Tijeras")
                {
                    console.log(`Ganaste!, tú elegiste ${opcionHumano} y la máquina escogió ${opcionMaquina}`);
                }    

                break;
        
            case "Papel":
                if(opcionMaquina === "Tijeras")
                {
                    console.log(`Lo sentimos, la máquina ganó, escogió ${opcionMaquina} y tú elegiste ${opcionHumano}`);
                }
                if(opcionMaquina === "Piedra")
                {
                    console.log(`Ganaste!, tú elegiste ${opcionHumano} y la máquina escogió ${opcionMaquina}`);
                }    
        
                break;
            
            case "Tijeras":
                if(opcionMaquina === "Piedra")
                {
                    console.log(`Lo sentimos, la máquina ganó, escogió ${opcionMaquina} y tú elegiste ${opcionHumano}`);
                }
                if(opcionMaquina === "Papel")
                {
                    console.log(`Ganaste!, tú elegiste ${opcionHumano} y la máquina escogió ${opcionMaquina}`);
                }    
            
                break;
        }
    }
}