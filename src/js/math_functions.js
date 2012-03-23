
function gcd( a, b ) {

  if ( b === 0 ) return a;
  return gcd( b, a % b );

}

function round( number, decimal_places ) {

  return Math.round( number * Math.pow( 10, decimal_places ) )
         / Math.pow( 10, decimal_places );

}
