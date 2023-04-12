<template>
    <div class="nav">
        <router-link class="title" to="/">Garrett Reinke</router-link>
        <div class="links">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/projects">Projects</router-link>
            <router-link class="link" to="">Contact Me</router-link>
        </div>
    </div>
</template>

<style scoped>
div.nav {
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a {
    font-weight: bold;
    color: #005;
    text-decoration: none;
}
a.link {
    margin: 0 10px;
    font-size: 1.2em;
}
a.title {
    font-size: 1.5em;
}
</style>