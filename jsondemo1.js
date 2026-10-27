//Se requieren tenga las claves:
// 2 cadena
// 2 numerico (entero, decimal)
// 1 null
// 1 logico (false / true)
// 1 array (cadenas)
// 1 array (objetos)
// 1 objeto (arrays) 

//10 MINUTOS

const Pelicula = {
  nombre: "Avatar",
  director: "James cameron",
  estreno: 2009,
  recaudacion: 2.923,
  paisBetado: null,
  reEstreno: false,
  idiomas: ["Ingles", "Español", "Frances"],
  elenco: [
    {nombre: "Sam Worthington", personaje: "Jake Sully", rol: "protagonista"},
    {nombre: "Zoe Saldana", personaje: "Neytiri Omaricaya", rol: "protagonista"}
  ],
  datos: {
    presupuesto: [237000000],
    premios: ["El mejor director de arte", "Mjeor fotografia"]
  }
}

//¿Cual es el ultimo elemento de idiomas?
console.log(Pelicula.idiomas[Pelicula.idiomas.length - 1])

//¿Cual es el personaje del primer actor
console.log(Pelicula.elenco[0].personaje)

//¿Cual es el rol del ultimo actor de la lista
console.log(Pelicula.elenco[Pelicula.elenco.length - 1].rol)

//Mostrar todas los datos 
const premios = Pelicula.datos.premios
premios.forEach(premio => {
  console.log(premio)
})