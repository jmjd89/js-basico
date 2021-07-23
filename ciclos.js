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

var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiantes(estudiante)
{
    console.log(` Hola ${estudiante} besitos`);
}

var contador = 0;
while (contador < estudiantes.length) {
    saludarEstudiantes(estudiantes[contador]);
    contador++;
}

while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}