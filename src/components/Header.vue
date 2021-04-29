<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: String,
      description: String
    }
  }
</script>

<style scoped>
h1 {
  margin: 40px 0px;
  color: navy;
};
p {
  text-align: center;
}
</style>
