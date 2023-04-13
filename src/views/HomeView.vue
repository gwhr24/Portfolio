<template>
  <div class="homeContainer">
    <img class="headshot" src="../assets/headshot.png"/>
    <div class="textContainer">
      <h1>Garrett Reinke</h1>
      <h2>Mechanical Engineering</h2>
      <p>
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
  text-align: left;
  width: 40%;
  margin: 20px;
}
div.homeContainer {
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
img.headshot {
  width: 35%;
  border-radius: 1000px;
}
h1 {
  font-size: 3em;
  margin: 0;
}
h2 {
  font-size: 1.7em;
}
p {
  font-size: 1.2em;
}
h2, p {
  margin-left: 5px;
}
</style>
