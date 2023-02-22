/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   if (x === y )
   {
      return true ;
   }
   else {
    return false  ;  
   }
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
}


function tienenMismaLongitud(str1, str2)
 {  
 var dato1 = String.length(str1);
 var dato2 = String.length(str2);
 if (dato1 === dato2 ){
   return true;
 }
 else { return false ; }
 }

   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:



function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if ( num < 90 ){
      return true ; 
   }
   else 
   {
     return false ; 
   }
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50)
   {
      return true ;
   }
   else{
      return false ; 
   }
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if ( num % 2 === 0 )
   {
      return true ;
   }
   else {
      return false ;
   }
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if ( num % 2 > 0 )
   {
      return true ;
   }
   else {
      return false ;
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
