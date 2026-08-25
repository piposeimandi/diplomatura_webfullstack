// Ejercicio 4 

var numeros = [12, 45, 7, 89, 23, 56]


var mayor = numeros[0]
// considero que mayor es el primer elemento del array y luego comparo con los demás elementos
// si encuentra uno mayor lo reemplaza y sigue comparando con los demás elementos del array
// de estamanera al terminar de recorrer el array, mayor contendrá el valor más grande del mismo. 


for (var i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i]
  }
}

console.log("El número mayor es: " + mayor)
