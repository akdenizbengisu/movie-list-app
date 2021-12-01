<template>
  <div class="grid grid-cols-5 bg-gray-100" id="app">
    <Header />
    <Search />
    <List  />
  </div>
</template>

<script>
import Header from './Header.vue'
import Search from './Search.vue'
import List from './List.vue'

export default {
    name: 'Home',
    components: {
      Header,
      Search,
      List
    },
  }
</script>

<style>

</style>