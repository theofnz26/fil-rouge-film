<script>
import axios from 'axios'

export default {
  data() {
    return {
      film: null,
      loading: true,
      error: null,
    }
  },

  mounted() {
    const id = this.$route.params.id

    axios
      .get('http://localhost:8000/api/movies/' + id)
      .then((response) => {
        this.film = response.data
        this.loading = false
      })
      .catch(() => {
        this.error = "Impossible de récupérer le détail du film."
        this.loading = false
      })
  },
}
</script>

<template>
  <main>
    <RouterLink to="/films">
      Retour à la liste
    </RouterLink>

    <p v-if="loading">Chargement du film...</p>

    <p v-if="error">
      {{ error }}
    </p>

    <div v-if="film">
      <h2>{{ film.title }}</h2>

      <p>Année : {{ film.year }}</p>

      <img
        v-if="film.poster"
        :src="film.poster"
        :alt="film.title"
        width="200"
      />

      <p v-if="film.fullPlot">
        {{ film.fullPlot }}
      </p>

      <p v-if="film.imdb && film.imdb.rating">
        Note IMDb : {{ film.imdb.rating }}
      </p>

      <h3>Genres</h3>

      <ul>
        <li v-for="genre in film.genres" :key="genre.id">
          {{ genre.label }}
        </li>
      </ul>

      <h3>Réalisateur</h3>

      <ul>
        <li v-for="director in film.directors" :key="director.id">
          {{ director.fullName }}
        </li>
      </ul>
    </div>
  </main>
</template>
