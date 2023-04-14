<template>
  <Navbar />
  <router-view/>
</template>

<script setup>
import Navbar from './components/Navbar.vue'

window.onscroll = () => {window.scrollTo(0, 0)}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #003;
}
body {
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>
