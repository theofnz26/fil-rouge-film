<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>Fil Rouge Films</h1>

  <p>Bienvenue sur mon application de films.</p>

  <nav>
    <RouterLink to="/">Accueil</RouterLink>
    |
    <RouterLink to="/films">Films</RouterLink>
  </nav>

  <hr />

  <RouterView />
</template>

<style scoped>
h1 {
  color: darkblue;
}

nav {
  margin-bottom: 20px;
}

a {
  color: blue;
}
</style>