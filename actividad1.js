//Almacenar un texto en una variable y luego mostrarlo en orden inverso en la consola
//Ejemplo: "SENATI" -> "itanes"
const texto = "Senati";

const longitud = texto.length 

let resultado = "";

for (let i = longitud - 1; i >= 0; i--){
  resultado += texto.substring(i, i + 1)
}

console.log(resultado)


//Crear una variable donde almacene una direccion de correo electronico
//Verificar si el correo es valido si tiene un solo @
//Ejemplo: 
// samuel@gamil.com [Correcto]
// luis@gmail@.com [Incorrecto]

const correo = "samuel@gmail.com"
const arroba = correo.split("@").length - 1

if (arroba === 1) {
  console.log(correo, "Correcto")
}else{
  console.log(correo, "Incorrecto")
}
