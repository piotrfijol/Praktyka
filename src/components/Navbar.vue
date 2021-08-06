<template>
    <nav class="navbar py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <a href="/" class="nav-link text-dark"><h1 class="app-name">ToDoApp</h1></a>    
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
  .app-name {
    text-align: left;
  }

  .github-link {
    height: 40px;
  }
  
</style>