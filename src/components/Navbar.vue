<template>
    <div class="nav py-[20px] pr-[10vw] pl-[5vw]">
        <router-link class="text-sm md:text-2xl" to="/" @mouseover="titleHover = true" @mouseleave="titleHover = false">
            <font-awesome-icon icon="fa-gear" v-if="!titleHover"/>
            <font-awesome-icon icon="fa-gear" v-if="titleHover" spin/>
            Garrett Reinke
        </router-link>
        <div class="links text-xs md:text-xl">
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
    margin: 0 5%;
}
a.link:hover {
    opacity: 0.6;
}
a.link.router-link-active {
    color: #0af;
}
</style>