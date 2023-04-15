<template>
    <div class="nav py-[20px] px-[6vw]">
        <router-link class="text-base md:text-3xl" to="/" @mouseover="titleHover = true" @mouseleave="titleHover = false">
            <font-awesome-icon icon="fa-gear" v-if="!titleHover"/>
            <font-awesome-icon icon="fa-gear" v-if="titleHover" spin/>
            Garrett Reinke
        </router-link>
        <div class="links text-sm md:text-xl">
            <router-link class="link mx-2" to="/" exact>Home</router-link>
            <router-link class="link mx-2" to="/projects" exact>Projects</router-link>
            <router-link class="link mx-2" to="/connect" exact>Connect</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const titleHover = ref(false)
</script>

<style scoped>
div.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a {
    font-weight: bold;
    color: #003;
    text-decoration: none;
}
a.link:hover {
    opacity: 0.6;
}
a.link.router-link-active {
    color: #0af;
}
</style>