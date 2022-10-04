/* Definí la función signo, que dado un número nos retorne:
1 si el número es positivo
0 si el número es cero
-1 si el número es negativo*/
function signo(numero) {
    if (numero >= 1) {
      return 1;
    }  else  if (numero <= -1) {
      return -1;
    } else {
      return 0;
    } 
  }