<template>
  <div class="homeContainer flex-col md:flex-row">
    <img class="headshot w-[200px] md:w-[400px]" src="../assets/headshot.png"/>
    <div class="textContainer w-[60%] md:w-[40%] sm:text-center  md:text-left">
      <h1 class="font-bold text-xl md:text-5xl">Garrett Reinke</h1>
      <h2 class="font-bold my-3 text-sm md:text-2xl">Mechanical Engineering</h2>
      <p class="text-xs md:text-lg">
        I am a hard working and fast learning Mechanical Engineer with three years of experience in Aquarium Life Support Systems and Mechanical Engineering design.
        I thrive in collaborative settings while building strong relationships and a positive work environment.
      </p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
div.textContainer {
  margin: 3%;
}
div.homeContainer {
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
img.headshot {
  border-radius: 1000px;
}
h2, p {
  margin-left: 5px;
}
</style>
