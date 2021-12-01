<template>
  <div class="search col-span-3 h-screen border-r-4">
    <div class="grid justify-items-center p-2 items-start">
      <h1 class=" font-bold text-lg">Find A Movie:</h1>
      <input class="mb-10 ring-2 ring-gray-400 p-1 mt-4 rounded-lg" type='text' v-model='query' @keyup='getResult(query)' placeholder="Search">

      <div v-if="results.Response === 'True'" v-bind='results' :key='results.id' class="grid grid-cols-3 grid-rows-3 justify-items-start pb-10 ">
        <div class="col-span-2 row-span-2">
          <div class="ml-10 mr-7">
            <p><strong>Title:</strong>  {{results.Title}}</p>
            <p><strong>Year:</strong>  {{results.Year}}</p>
            <p><strong>Genre:</strong>  {{results.Genre}}</p>
            <p class="mt-5"><strong>Summary:</strong>  {{results.Plot}}</p>
          </div>
        </div>

        <div class=" w-4/5  col-span-1 row-span-3">
          <img :src="results.Poster" class="ring-4 ring-gray-400 rounded-lg"/>
        </div>

        <button v-if="!this.$store.state.favorites.movieTitles.includes(results.Title)" @click='addMovie({results})' class="ring-4 ring-green-600 hover:bg-green-600 rounded-lg col-span-1 ml-9 self-center p-2">Add to Favorites</button>

      </div>
    </div>
  </div>

</template>
<script>

import axios from 'axios'
const API_KEY = 'a1a35f9b'

export default {
  name: 'search',
  data () {
    return {
      query: '',
      results: '',
      enableButton: ''
    }
  },
  methods: {
    getResult(query) {
     axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&t=` + query)
      .then(response => { this.results = response.data})
     console.log(this.results)
     console.log(`http://www.omdbapi.com/?apikey=${API_KEY}&t=` + query);
    },
    addMovie(x) {
      this.$store.state.favorites.movieList.push(x.results);
      this.$store.state.favorites.movieTitles.push(x.results.Title)
      console.log(this.$store.state.favorites.movieTitles);
      
    }
  },
  computed: {
    favorites() { return this.$store.state.favorites }
  }
}
</script>

<!-- @click='addMovie({results})'
v-if='movieExists({results})' -->