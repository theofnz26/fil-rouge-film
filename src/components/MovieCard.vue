<template>
  <div>
    <h3>{{ film.title }}</h3>

    <p>Année : {{ film.year }}</p>

    <img
      v-if="film.poster"
      :src="film.poster"
      :alt="film.title"
      width="150"
    />

    <p v-if="film.plot">
      {{ film.plot }}
    </p>

    <RouterLink :to="'/films/' + film.id">
      Voir le détail
    </RouterLink>

    <hr />
  </div>
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      required: true,
    },
  },
}
</script>