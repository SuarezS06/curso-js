// Estructuras = objetos
// Desructuracion = abrir onjetos
const persona = {
  apellidos : "Suarez Moreno",
nombres : "Samuel Alejandro",
edad : 42,
skills: ["PHP", "Java", "JavaScript"]
}

//Guardar apellidos, nombres, edad en variables
/*
const apellidos = persona.apellidos
const nombres = persona.nombres
const edad = persona.edad
*/

// Desetructurar es separar datos provenientes de un objeto
// NOTA: No es necesario recuperar toda la coleccion
// NOTA: La variables coindicen con las claves
const {nombres, skills} = persona

console.log(nombres, skills)