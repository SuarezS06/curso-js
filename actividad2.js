// Crear un objeto que almacene datos de una mascota
//Desestructurar utilizando un minimo de 4 variables
//Mostrar en consola.

const mascota = {
  nombre : "teo",
  apodo : "dofilo",
  raza : "husky",
  edad : 4,
  peso : 6,
  pelaje : ["negro", "blanco", "gris"]
}

const {nombre, apodo, pelaje} = mascota

console.log(nombre,apodo, pelaje)