
function gcd( a, b ) {

  if ( b === 0 ) return a;
  return gcd( b, a % b );

}

function round( number, decimal_places ) {

  return Math.round( number * Math.pow( 10, decimal_places ) )
         / Math.pow( 10, decimal_places );

}

function sinh( number ) {

  // Returns the hyperbolic sine of the number, defined as (exp(number) - exp(-number))/2  
  // original by: Onno Marsman, http://phpjs.org/functions/sinh, version: 1109.2015
  
  return ( Math.exp( number ) - Math.exp( -number ) ) / 2;

}

function asinh( number ) {
  
  // Returns the inverse hyperbolic sine of the number, i.e. the value whose hyperbolic sine is number
  // original by: Onno Marsman, http://phpjs.org/functions/asinh, version: 1109.2015
  
  return Math.log( number + Math.sqrt( Math.pow( number, 2 ) + 1 ) );

}

function cosh( number ) {
  // Returns the hyperbolic cosine of the number, defined as (exp(number) + exp(-number))/2
  // original by: Onno Marsman, http://phpjs.org/functions/cosh, version: 1109.2015

  return ( Math.exp( number ) + Math.exp( -number ) ) / 2;

}


function acosh( number ) {

  // Returns the inverse hyperbolic cosine of the number, i.e. the value whose hyperbolic cosine is number  
  // original by: Onno Marsman, http://phpjs.org/functions/acosh, version: 1109.2015
  
  return Math.log( number + Math.sqrt( number * number - 1 ) );

}



