/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   num = num * num ;
   return num;  
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
}

function elevarAlCubo(num) {
   var cubo = num * num * num ; 
   return cubo; 
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
}

function elevar(num, exponent) {
   var  elevar = num**exponent; 
  return elevar ;  
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   
   var entero = Math.round(num )
 return entero ; 

}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   var arriba = Math.ceil(num)
  return arriba ;
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   
   return Math.random ();
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
