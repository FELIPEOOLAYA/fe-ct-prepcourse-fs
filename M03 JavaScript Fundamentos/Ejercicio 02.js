/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   return string ;
   // Debe retornar un string.
   // Tu código:
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   
   // Retorna el resultado de su suma.
   // Tu código:
   var suma  = x + y 
 return suma ; 
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resta  = x - y 
   return resta ; 
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var divide   = x/ y 
   return divide  ; 
}


function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var multiplica  = x * y 
  return multiplica ; 

}

function obtenerResto(x, y) {
   var suma = x % y 
 return suma ; 
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
