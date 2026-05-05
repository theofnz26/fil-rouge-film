<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <h1>Fil Rouge Films</h1>

    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      |
      <RouterLink to="/films">Films</RouterLink>
      |
      <RouterLink to="/films/12544">Test détail</RouterLink>
    </nav>

    <hr />

    <p>URL actuelle : {{ route.path }}</p>
    <p>Nombre de routes trouvées : {{ route.matched.length }}</p>

    <hr />

    <RouterView />
  </div>
</template>