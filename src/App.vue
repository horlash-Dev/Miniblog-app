<template>
  <section> 
    <Header />
  <router-view/>
  </section>
</template>
<script>
import Header from '@/views/partial/Header.vue'
  export default {
    name: 'App',
    components:{Header}
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #2c3e50;
}

#nav {
  padding: 35px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  
}
</style>
