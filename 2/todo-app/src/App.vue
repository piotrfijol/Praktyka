<template>
  <navbar v-show="$route.path !== '/'" />
  <main class="wrapper">
    <router-view />
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  }
}

</script>

<style>

  .app-name {
    font-family: 'Lobster';
    font-weight: 400;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
