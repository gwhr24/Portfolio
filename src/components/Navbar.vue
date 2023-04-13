<template>
    <div class="nav">
        <router-link class="title" to="/" @mouseover="titleHover = true" @mouseleave="titleHover = false">
            <font-awesome-icon icon="fa-gear" v-if="!titleHover"/>
            <font-awesome-icon icon="fa-gear" v-if="titleHover" spin/>
            Garrett Reinke
        </router-link>
        <div class="links">
            <router-link class="link" to="/" exact>Home</router-link>
            <router-link class="link" to="/projects" exact>Projects</router-link>
            <router-link class="link" to="/connect" exact>Connect</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const titleHover = ref(false)
</script>

<style scoped>
div.nav {
    padding: 20px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a {
    font-weight: bold;
    color: #003;
    text-decoration: none;
}
a.link {
    margin: 0 10px;
    font-size: 1.2em;
}
a.link:hover {
    opacity: 0.6;
}
a.title {
    font-size: 1.5em;
}
a.link.router-link-active {
    color: #0af;
}
</style>