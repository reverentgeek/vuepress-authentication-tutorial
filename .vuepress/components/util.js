export function redirect( path ) {
  if ( window ) {
    window.location.replace( path );
  }
}
