<template>
  <div class="home-layout">
    <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <Posts />
      </div>
      <div class="col-lg-4">
        <Sidebar />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue'
import Sidebar from '@/views/partial/Sidebar.vue'


export default {
  name: 'Home',
  components: {
    Posts,Sidebar
  }
}
</script>
