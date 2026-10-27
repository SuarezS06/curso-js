//https://dragonball-api.com/api/characters/1


//PASO 1: función asincrona (tiempos distintos/diferidos) - Latencia (Esperar...)
async function obtenerPersonaje(id){
//PASO 2: URL (endpoint)
const API_URL = `https://dragonball-api.com/api/characters/${id}`

  //PASO 3: app es propensa a errores...
  try{

    //PASO 4: Realizar la petición
    const respuesta = await fetch(API_URL)

    //PASO 5: ¿Existe una respuesta?
    if (!respuesta.ok){
      throw new Error(`No hay comunicación con el servidor`)
    }

    //PASO 6: SI llegamos hasta aqui, entonces hemos recibido los datos (JSON)
    //JSON (Cadena) > OBJETO JS
    const datos = await respuesta.json()

    //PASO 7
    //console.log(datos)

    //Mostrar solo el nombre de las transformaciones
    const transformaciones = datos.transformations
    transformaciones.forEach(transformacion => {
    console.log(transformacion.name)
});


  }catch(e){
    console.error(`No se pude concretar la operación: ${e}`)
  }
}

//Fin de la función obtenerPersonaje

//TEST
//Debemos pasar el id del personaje
obtenerPersonaje(3)