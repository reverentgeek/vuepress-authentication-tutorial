<template>
  <p>Redirecting after login...</p>
</template>

<script>
import { redirect } from "./util";

export default {
  async mounted() {
    // Process the auth tokens
    await this.$auth.handleAuthentication();

    // get the redirect path from local storage
    const path = this.$auth.getFromUri();

    // Using $router correctly redirects, but the app
    // may continue to behave as if the user is not
    // logged in.
    // this.$router.replace( { path } );

    // Not ideal, but this forces the auth
    // to recognize the user is logged in
    if ( window ) {
      redirect( path );
    }
  }
}
</script>
