/* Ejercicio 2: Medio de transporte según distancia */

var distancia = 45000 // distancia en metros

function transporte(distancia) {
  if (distancia >= 100000) return "avión"
  if (distancia >= 30000) return "auto"
  if (distancia >= 10000) return "colectivo"
  if (distancia >= 1000) return "bicicleta"
  return "pie"
}

console.log("La distancia es de " + distancia + " metros. Medio de transporte: " + transporte(distancia))
