var personas = ["Juan", "Gerardo", "Omar"];

function saludarPersonas(nombre){
    console.log(`!Saludos ${nombre}¡`);
}

for (var item = 0;  item < personas.length; item++)
{
    saludarPersonas(personas[item]);
}

for (var persona of personas)
{
    saludarPersonas(persona);
}

personas.forEach(element => {
    saludarPersonas(element);
});