//Hacer una consula al API y obtener una lista de los planetas
//Mostrar únicamente los planetas que NO hayan sido destruidos (isDestroyed)
//los datos a mostrar son: name (id) Ejemplo: Monmar(6).

async function obtenerPlaneta(){

  const API_URL = "https://dragonball-api.com/api/planets"

  try {
    
    const respuesta = await fetch(API_URL)

    if (!respuesta.ok){
      throw new Error(`No hay comunicación con el servidor`) 
    }
    const datos = await respuesta.json()

    const planetas = datos.items
    planetas.forEach(p => {
      if (!p.isDestroyed) {
        console.log(p.name)
      }
      
    });


  } catch (e) {
      console.error(`No se pudo concretar la operación: ${e}`)
  }
} 

obtenerPlaneta()