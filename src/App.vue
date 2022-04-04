<template>
  <div class="container">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
.container {
  max-width: 900px;
  margin: 0 auto;
}
</style>
