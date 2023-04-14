<template>
    <Carousel class="projectCarousel" :items-to-show="2" :wrap-around="true" :transition="500" :autoplay="5000">
        <Slide v-for="project in projects" :key="project">
            <div class="slide" @click="openModal(project)">
                <v-img class="projectImg" :src="project.img"/>
                <h3 class="font-bold mt-5 text-xs md:text-lg">{{ project.title }}</h3>
                <p class="text-xs md:text-base">{{ project.date }}</p>
            </div>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
    <div class="modal" ref="modal">
        <font-awesome-icon icon="fa-solid fa-chevron-down" size="2xl" @click="closeModal"/>
        <div class="modalContainer grid grid-cols-1 md:grid-cols-2">
            <div class="carouselContainer">
                <Carousel class="mediaCarousel" :wrap-around="true" :transition="500">
                    <Slide v-for="media in curProject.media" :key="project">
                        <div class="modalSlide w-100 h-[40vh] md:h-[75vh] flex flex-col">
                            <v-img class="modalImg" :src="media.src" v-if="!media.vid"/>
                            <video class="w-[auto] h-100" controls v-if="media.vid">
                                <source :src="media.src" type="video/mp4">
                            </video>
                            <p class="font-bold mt-5 text-xs md:text-base">{{ media.desc }}</p>
                        </div>
                    </Slide>
                    <template #addons="{ slidesCount }">
                        <Navigation v-if="slidesCount > 1"/>
                    </template>
                </Carousel>
            </div>
            <div class="projectInfo">
                <h3 class="text-xl md:text-base font-bold">{{ curProject.title }}</h3>
                <p class="projectDesc text-left text-xs md:text-base my-[5px] md:my-[10px]" v-for="desc in curProject.info">
                {{ desc }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue';

const modal = ref(null)

const openModal = (project) => {
    modal.value.classList.add("open")
    curProject.value = project
}

const closeModal = () => {
    modal.value.classList.remove("open")
}

const projects = [{
        img: require('../assets/hvac-pic.png'),
        title: 'MEP Design Projects',
        date: '2022',
        media: [{
            src: require('../assets/plumbing-pic.png'),
            desc: "AutoCAD Plumbing Design",
            vid: false
        },
        {
            src: require('../assets/hvac-pic.png'),
            desc: "Revit HVAC Design", 
            vid: false
        },
        {
            src: require('../assets/elec-pic.png'),
            desc: "AutoCAD Electrical Design",
            vid: false
        }],
        info: ['Plumbing supply and vent design, sanitary and storm water drainage design, equipment selections, code compliance and construction documentation',
               'HVAC load calculations, system and equipment/device selection, ductwork and ventilation design, code compliance, and controls and automation',
               'Electrical power distribution design, lighting design, fire alarm and detection system, equipment specifications, and code compliance']
    },
    {
        img: require('../assets/png.png'),
        title: 'FSAE Driver Interfaces Design Lead',
        date: '2022',
        media: [require('../assets/png.png')],
        media: [{
            src: require('../assets/png.png'),
            desc: "NX Steering Wheel Design",
            vid: false
        }],
        info: ['Steering wheel plate, lightweight carbon fiber layup design',
               'Steering wheel grips, ergonomic 3D printed ABS design',
               'Steering column material and design',
               'Controls FEA and steering calculations']
    },
    {
        img: require('../assets/fsae car.png'),
        title: 'FSAE Car Assembly',
        date: '2022',
        media: [{
            src: require('../assets/column-pic.png'),
            desc: "NX Steering Column Design",
            vid: false
        },
        {
            src: require('../assets/column2-pic.png'),
            desc: "NX Steering Column Design", 
            vid: false
        },
        {
            src: require('../assets/hub-pic.png'),
            desc: "SOLIDWORKS Wheel Assembly",
            vid: false
        }],
        info: ['Steering wheel assembly to steering shaft',
               'Wheel Assembly with break pads, rotors, and hubs',
               'Bearing assembly with machined cone spacer for suspension']
    },
    {
        img: require('../assets/setupcad-big.png'),
        title: "Faraday's Law Poster Presentation",
        date: '2021',
        media: [{
            src: require('../assets/Slide1.jpg'),
            desc: "Faraday's Law Poster Project",
            vid: false
        },
        {
            src: require('../assets/setupcad-big.png'),
            desc: "Faraday's Law Experimental Design", 
            vid: false
        },
        {
            src: require('../assets/setup.png'),
            desc: "Faraday's Law Experimental Setup",
            vid: false
        }],
        info: ['Create and design a Faraday\'s Law verification experiment from scratch',
               'Design the measurement program and instrumentation to measure voltage through the coil',
               'Create a mathematical model for the velocity of the magnet passing through the coil including a differential equation for the weight of the string, the moment of inertia of the pulleys, and the Lorentz force.',
               'Verify mathematical model and experiment']
    },
    {
        img: require('../assets/rc-pic.png'),
        title: 'RC Car Design Lead Engineer',
        date: '2021',
        media: [{
            src: require('../assets/rc-pic.png'),
            desc: "NX RC Car Design",
            vid: false
        },
        {
            src: require('../assets/drivetrain-pic.png'),
            desc: "NX Powertrain Design", 
            vid: false
        },
        {
            src: require('../assets/driveshaft.png'),
            desc: "NX Powertrain Assembly",
            vid: false
        },
        {
            src: require('../assets/IMG_0.mp4'),
            desc: "RC Car Competition", 
            vid: true
        },
        {
            src: require('../assets/IMG_0-1.mp4'),
            desc: "RC Car Competition", 
            vid: true
        }],
        info: ['Design a remote controlled car using existing front suspension only',
               'Select battery, motor, engine speed controller, and wheels based on design requirements and calculations',
               'Design and machine a billet aluminum four stage gear box and drive train from calculated gear ratios for required torque',
               'Design and machine a billet aluminum, modular, chassis based on design restraints',
               'Design 3D printed battery box and ABS rear axel bearing holders with method of attachment']
    },
    {
        img: require('../assets/IMG_3383.png'),
        title: 'Aquarium Life Support System Design',
        date: '2021',
        media: [require('../assets/IMG_3383.png')],
        media: [{
            src: require('../assets/IMG_0-2.mp4'),
            desc: "6 Sand Filter System Backwash",
            vid: true
        }],
        info: ['Design a mobile and modular biological, chemical, and mechanical filtration system that can be used on any system for additional filtration of any kind',
               'Water circulation and filtration maintenance with routine sand filter backwashes',
               'Monitoring heating, cooling, and control systems for irregularities',
               'Sampling of system chemistry, microbiology, chlorine/chloramine, alkalinity/hardness, and total suspended solids (TSS)']
    }]

    const curProject = ref(projects[0])
</script>

<style>
div.projectContainer {
    height: 100vh;
    overflow: hidden;
}
ol.carousel__pagination {
    padding: 0;
}
div.slide {
    color: #003;
    padding-top: 5vh;
    height: 85vh;
    width: 95%;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
}
div.projectImg, div.modalImg {
    max-height: 80%;
    width: 100%;
}
svg.carousel__icon {
    background-color: rgba(150, 150, 150, 0.3);
    border-radius: 15px;
}
div.modal {
    background: #fff;
    position: absolute;
    top: 110%;
    height: 150vh;
    width: 100vw;
    transition: all 800ms;
}
div.modal.open {
    top: 60px;
}
div.modalSlide {
    color: #003;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
div.projectInfo {
    margin: 0 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
svg.fa-chevron-down {
    cursor: pointer;
}
button.carousel__pagination-button::after {
    border-radius: 10px;
}
section.projectCarousel .carousel__viewport {
  perspective: 2000px;
}

section.projectCarousel .carousel__track {
  transform-style: preserve-3d;
}

section.projectCarousel .carousel__slide--sliding {
  transition: 0.5s;
}

section.projectCarousel .carousel__slide {
  opacity: 0.6;
  transform: rotateY(-40deg) scale(0.8);
}

section.projectCarousel .carousel__slide--active ~ .carousel__slide {
  opacity: 0.6;
  transform: rotateY(40deg) scale(0.8);
}

section.projectCarousel .carousel__slide--prev {
  opacity: 0.8;
  transform: rotateY(-20deg) scale(0.9);
}

section.projectCarousel .carousel__slide--next {
  opacity: 0.8 !important;
  transform: rotateY(20deg) scale(0.9) !important;
}

section.projectCarousel .carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>