<script>
import axios from 'axios'
import MovieCard from '../components/MovieCard.vue'

export default {
  components: {
    MovieCard,
  },

  data() {
    return {
      films: [],
      loading: true,
      error: null,
    }
  },

  mounted() {
    axios
      .get('http://localhost:8000/api/movies?page=1&itemsPerPage=5')
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

    <p>
      Cette page affiche une liste de films grâce à des composants Vue.
    </p>

    <p v-if="loading">Chargement des films...</p>

    <p v-if="error">
      {{ error }}
    </p>

    <div v-if="!loading && !error">
      <MovieCard
        v-for="film in films"
        :key="film.id"
        :film="film"
      />
    </div>
  </main>
</template>
