<template>
    <nav class="navbar py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <router-link to="/" class="nav-link text-dark"><h1 class="app-name">ToDoApp</h1></router-link>    
        <a href="https://github.com/piotrfijol" class="nav-link"><img src="../assets/github_mark.svg" alt="github mark" class="github-link d-block"></a>
      </div>
    </nav>
</template>

<script>

export default {
    name: 'navbar'
}
</script>

<style scoped> 
  .navbar {
    border-bottom: 1px solid #EEE;
    position: fixed;
    top: 0;
    z-index: 10;
    background: #FFF;
    width: 100vw;
  }

  .app-name {
    text-align: left;
  }

  .github-link {
    height: 40px;
  }
  
</style>