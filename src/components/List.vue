<template>
  <div class="col-span-2 p-2">
    <h3 class="text-center font-bold text-lg">My List</h3>
    <h4 v-if="favorites.movieList.length === 0" class="italic text-center mt-4 text-gray-500">Your list is empty.</h4>
    <div class="text-right mr-3">
    <button @click='removeAll()' class="bg-red-700 p-1 px-2 text-sm text-white rounded-lg" v-if="favorites.movieList.length > 0">Remove All</button>
    </div>
    
    <ul>
      <li v-for="item in favorites.movieList" :key="item.index" class="border-2 m-3 bg-gray-300 rounded-lg"> 
        <div class="flex m-3 gap-x-0.5">
          <div class="w-1/5">
            <img :src="item.Poster" class="rounded-lg h-24 ring-2 ring-yellow-200 " />
          </div>
          <div>
            <h2><strong>{{item.Title}}</strong></h2>
            <p><strong>Year: </strong>{{item.Year}}</p>
            <p><strong>Genre: </strong>{{item.Genre}}</p>
            <button class="bg-red-700 p-1 px-2 text-sm text-white rounded-lg"  @click='removeMovie(item)'>Remove</button>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'list',
  props: {
    favoriteMovie: Object
  },
  methods: {
    removeMovie(y) {
      const indexMovie = this.$store.state.favorites.movieList.indexOf(y)
      const indexTitle = this.$store.state.favorites.movieTitles.indexOf(y.Title)
      if (indexMovie > -1) {
        this.$store.state.favorites.movieList.splice(indexMovie, 1)
        this.$store.state.favorites.movieTitles.splice(indexTitle, 1);
      }
    },
    removeAll() {
      this.$store.state.favorites.movieList = []
      this.$store.state.favorites.movieTitles = []
    }
  },
  computed: {
    favorites() { return this.$store.state.favorites }
  }
}
</script>

