<template>
    <Carousel :items-to-show="2" :wrap-around="true" :transition="500" :autoplay="5000">
        <Slide v-for="project in projects" :key="project">
            <div class="slide" @click="router.push({ name: id })">
                <v-img class="projectImg" :src="project.img"/>
                <h3 class="projectTitle">{{ project.title }}</h3>
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
import router from '@/router';

const projects = [
    {
        img: require('../assets/plumbing-pic.png'),
        title: 'MEP Design Projects',
        date: '2022',
        id: 'mdp'
    },
    {
        img: require('../assets/png.png'),
        title: 'FSAE Driver Interfaces Design Lead',
        date: '2022',
        id: 'fdidl'
    },
    {
        img: require('../assets/fsae car.png'),
        title: 'FSAE Car Assembly',
        date: '2022',
        id: 'fca'
    },
    {
        img: require('../assets/setupcad.png'),
        title: "Faraday's Law Poster Presentation",
        date: '2021',
        id: 'flpp'
    },
    {
        img: require('../assets/rc big.png'),
        title: 'RC Car Design Lead Engineer',
        date: '2021',
        id: 'rcdle'
    },
    {
        img: require('../assets/IMG_3383.png'),
        title: 'Aquarium Life Support System Design',
        date: '2021',
        id: 'alssd'
    },
]
</script>

<style>
ol.carousel__pagination {
    padding: 0;
}
div.slide {
    color: #003;
    padding-top: 20px;
    height: 80vh;
    width: 95%;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
}
div.projectImg {
    max-height: 80%;
    width: 100%;
}
svg.carousel__icon {
    background-color: rgba(150, 150, 150, 0.3);
    border-radius: 15px;
}
h3.projectTitle {
    margin: 10px 0;
}
button.carousel__pagination-button::after {
    border-radius: 10px;
}
.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.6;
  transform: rotateY(-40deg) scale(0.8);
}

.carousel__slide--active ~ .carousel__slide {
  opacity: 0.6;
  transform: rotateY(40deg) scale(0.8);
}

.carousel__slide--prev {
  opacity: 0.8;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--next {
  opacity: 0.8 !important;
  transform: rotateY(20deg) scale(0.9) !important;
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>