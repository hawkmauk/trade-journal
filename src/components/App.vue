<template>
<div id="app">
    <h1>{{ text.title }}</h1>
    <p>{{ text.description }}</p>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  data: function(){
    return {
      text: {
        title: 'Trading Journal',
        description: 'A Vue project by Michael Hawkins'
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: greyscale;
  text-align: justify;
  color: black;
  margin-top: 60px;
}
</style>

