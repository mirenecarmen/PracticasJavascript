/*  definí las siguientes funciones:
estaEntre, que tome tres números y diga si el primero es mayor al segundo y menor al tercero.
estaFueraDeRango: que tome tres números y diga si el primero es menor al segundo o mayor
 al tercero*/

function estaEntre(pri,seg,ter){
    return pri>seg && pri<ter;
  }
  function estaFueraDeRango(pri,seg,ter){
    return pri<seg || pri>ter;
  }