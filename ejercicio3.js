/*Veamos si se entiende; definí las siguientes funciones:

anterior: toma un número y devuelve ese número menos uno
triple: devuelve el triple de un número
anteriorDelTriple, que combina las dos funciones anteriores: multiplica a un número por 3 y le resta 1 */

function anterior(numero) {
    return numero - 1;
  }
  function triple(numero) {
    return 3 * numero;
  }
  function anteriorDelTriple(numero) {
     return anterior(triple(numero));
  }
  let hola='hola mundo'
  console.log(hola);