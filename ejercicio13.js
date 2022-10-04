/*  Veamos un ejemplo si necesitamos mas de dos alternativas (condicionales):
Agus se olvida siempre de como tiene que cuidar sus plantas , por eso definió la función
 cuidadoSegun(dia) que le recuerda que los lunes tiene que fertilizarlas, 
los viernes las tiene que fumigar y el resto de los días las tiene que regar.*/
function cuidadoSegun(dia) {
    if (dia === "lunes") {
      return "fertilizar";
    }  else  if (dia === "viernes") {
      return "fumigar";
    } else {
      return "regar";
    } 
  }
