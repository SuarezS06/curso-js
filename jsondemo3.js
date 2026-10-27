//Crea una funcion que reciba el nombre del planeta, haga uso del API Dragon Ball
//y retorne una lista de personajes (name - race - affiliation)
//Piccolo - Namekian - Z Fighter
//Ginyu - Frieza Race - Army of Frieza
//Dende - Namekian - Z Fighter
// ...

async function obtenerPlanetas() {
    const API_URL = "https://dragonball-api.com/api/planets/";

    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) {
            throw new Error(`No hay comunicación con el servidor`);
        }
        const datos = await respuesta.json()
        const planetas = datos.items

        planetas.forEach(planeta => {
            if (!planeta.isDestroyed){
                //console.log(`Planeta: ${planeta.name} - destruido: ${planeta...
                console.log(planeta.name)
            }
        });

    } catch (e) {
        console.error(`No se pudo concretar la operación: ${e}`);
    }
}

obtenerPlanetas();