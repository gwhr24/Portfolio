<template>
    <div class="connectContainer">
        <h1 class="text-3xl font-bold">Contact Information</h1>
        <p class="text-lg">gwhr24@gmail.com</p>
        <p class="text-lg">(417) 299-6096</p>
        <a class="text-lg inline bg-slate-200 p-2 rounded hover:opacity-50 m-3" :href="resume" target="_blank" rel="noreferrer noopener">Resume</a>
        <h2 class="text-2xl font-bold">Social Media</h2>
        <div>
            <a href="https://www.instagram.com/asap_reinke/?hl=en" target="_blank" rel="noreferrer noopener">
                <font-awesome-icon icon="fa-brands fa-instagram" size="2xl"/>
            </a>
            <a href="https://www.linkedin.com/in/garrett-reinke-399315188" target="_blank" rel="noreferrer noopener">
                <font-awesome-icon icon="fa-brands fa-linkedin" size="2xl"/>
            </a>
        </div>
    </div>
</template>

<script setup>
import resume from '../assets/Garrett Reinke Resume April 2023.pdf'
</script>

<style scoped>
div.connectContainer {
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
p {
    margin: 10px;
}
svg {
    margin: 10px;
}
</style>