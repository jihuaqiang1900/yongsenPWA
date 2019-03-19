<template>
  <div id="app">
    <div id="nav">
      app module
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    if (this.$platform.isMob) {
      this.$router.replace({name: 'mob'})
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
