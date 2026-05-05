<script>
import axios from 'axios'

export default {
  data() {
    return {
      films: [],
      loading: true,
      error: null,
    }
  },

  mounted() {
    axios
      .get('http://localhost:8000/api/movies?page=1&itemsPerPage=6')
      .then((response) => {
        this.films = response.data.member
        this.loading = false
      })
      .catch(() => {
        this.error = "Impossible de récupérer les films."
        this.loading = false
      })
  },
}
</script>

<template>
  <main>
    <h2>Liste des films</h2>

    <p v-if="loading">Chargement des films...</p>

    <p v-if="error">
      {{ error }}
    </p>

    <div v-if="!loading && !error">
      <div v-for="film in films" :key="film.id">
        <h3>{{ film.title }}</h3>

        <p>Année : {{ film.year }}</p>

        <img v-if="film.poster" :src="film.poster" :alt="film.title" width="150" />

        <p v-if="film.plot">
          {{ film.plot }}
        </p>

        <hr />
      </div>
    </div>
  </main>
</template>