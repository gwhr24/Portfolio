<template>
    <Carousel :items-to-show="2" :wrap-around="true">
        <Slide v-for="project in projects" :key="project">
            <div class="slide">
                <v-img class="projectImg" :src="project.img"/>
                <h3>{{ project.title }}</h3>
                {{ project.date }}
            </div>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const projects = [
    {
        img: require('../assets/plumbing.png'),
        title: 'MEP Design Projects',
        date: '2022'
    },
    {
        img: require('../assets/png.png'),
        title: 'FSAE Driver Interfaces Design Lead',
        date: '2022'
    },
    {
        img: require('../assets/fsae car.png'),
        title: 'FSAE Car Assembly',
        date: '2022'
    },
    {
        img: require('../assets/setupcad.png'),
        title: "Faraday's Law Poster Presentation",
        date: '2021'
    },
    {
        img: require('../assets/rc big.png'),
        title: 'RC Car Design Lead Engineer',
        date: '2021'
    },
    {
        img: require('../assets/rc big.png'),
        title: 'Aquarium Life Support System Design',
        date: '2021'
    },
]
</script>

<style>
ol.carousel__pagination {
    padding: 0;
}
div.slide {
    height: 80vh;
    width: 95%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
div.projectImg {
    width: 100%;
}
svg.carousel__icon {
    background-color: rgba(150, 150, 150, 0.3);
    border-radius: 15px;
}
</style>