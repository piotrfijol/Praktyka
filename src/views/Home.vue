<template>
    <div class="container d-flex flex-column justify-content-center align-items-center">
        <h1 class="app-name animate__animated animate__bounceIn">ToDoApp</h1>
        <p class="main__caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <router-link to="/todo"><button class="btn btn-dark py-3 px-5">Get Started</button></router-link>
    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped>

  .container {
    height: 100vh;
  }

  .container .app-name {
    font-size: 64px;
  }

  .main__caption {
    font-size: 20px;
    max-width: 520px;
    word-wrap: break-word;
  }

</style>
