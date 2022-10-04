/* desarrollar una función esMayorDeEdad, que nos diga si alguien tiene 18 años o más.
 Usar if es totalmente innecesario, dado que la expresión edad >= 18 ya es booleana,
 para ello lo conveniente es usar un return*/

 /* forma INCORRECTA
 function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}*/
/*FORMA CORRECTA*/
function esMayorDeEdad(edad) {
    return edad >= 18;
  }