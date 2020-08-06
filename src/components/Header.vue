<template>
  <nav>
    <!-- <img class='header-img' src='../assets/moon.svg'> -->
    <div class="tabs is-centered">
      <ul>
        <li>
          <div class="svg-wrapper">
            <svg height="40" width="100" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape" height="40" width="100" />
            </svg>
            <router-link to="/about" class="text">ABOUT</router-link>
          </div>
        </li>
        <li>
          <div class="svg-wrapper-two">
            <svg height="40" width="120" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape" height="40" width="120" />
            </svg>
            <router-link to="/projects" class="text">PROJECTS</router-link>
          </div>
        </li>
        <li>
          <div class="svg-wrapper-two">
            <svg height="40" width="120" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape" height="40" width="120" />
            </svg>
            <router-link to="/resume" class="text">RESUME</router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
html,
body {
  overflow: hidden;
  text-align: center;
}
.svg-wrapper {
  position: relative;
  margin: 0 auto;
  width: 100px;
  z-index: 1;
}
.svg-wrapper-two {
  position: relative;
  margin: 0 auto;
  width: 120px;
  z-index: 1;
}
.shape {
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  fill: transparent;
  stroke: white;
  border-bottom: 5px solid white;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
}
.text {
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #fff;
  top: -47px;
  z-index: 2;
  position: relative;
}
.svg-wrapper:hover .shape {
  stroke-width: 2px;
  stroke-dashoffset: 0;
  stroke-dasharray: 760;
}
.svg-wrapper-two:hover .shape {
  stroke-width: 2px;
  stroke-dashoffset: 0;
  stroke-dasharray: 760;
}
li a {
  font-family: "Lexend Deca", sans-serif;
}
.header-img {
  height: 20vh;
  opacity: 0.6;
}
.tabs a {
  color: white;
  border: none;
  transition: text-shadow 1s;
}
.tabs a:hover {
  color: white;
  text-shadow: 0px 0px 10px rgb(247, 155, 208);
}
.tabs ul {
  border: none;
}
</style>