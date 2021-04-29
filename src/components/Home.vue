<template>
  <div id="home">
    <p>{{ text.content }}</p>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      text: {
        content: 'Welcome to the homepage',
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

