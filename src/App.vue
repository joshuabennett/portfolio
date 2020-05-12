<template>
  <div id="app">
    <div class="stars"></div>
    <app-header class='push'></app-header>
    <div>
      <transition name='fade' mode='out-in'>
          <router-view></router-view>
      </transition>
        <!-- <app-projects></app-projects> -->
        <!-- <app-resume></app-resume> -->
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Resume from './components/Resume.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-about': About,
    'app-resume': Resume,
    'app-projects': Projects
  }
}
</script>

<style lang="scss">
body, html, #app {
    overflow: auto;
    margin: 0;
    padding: 0;
}
.push {
  margin-top: 1vw;
}
html {
  height: 100%;
  background: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  overflow: hidden;
  
}
.info {
  height: 30vh;
  width: 100vw;
  transform: translateY(-20%);
}
.stuff {
    background: rgba(0, 0, 0, 0.3);
    padding-bottom: 5%;
    width: auto;
    max-width: 50vw;
    border-radius: 50px;
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, 
    from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  min-height: -webkit-fill-available
}

* {
    margin: 0;
    padding: 0;
}
header {

    color:#ffffff;
    display:block;
    font: 14px/1.3 Arial,sans-serif;
    height:50px;
    position:relative;
    z-index:5;
}
h2{
    margin-top: 30px;
    text-align: center;
}
header h2{
    font-size: 22px;
    margin: 0 auto;
    padding: 10px 0;
    width: 80%;
    text-align: center;
}
header a, a:visited {
    text-decoration:none;
    color:#fcfcfc;
}

.stars, .twinkling, .clouds {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background: url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index:0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 1336px) {
    .info {
      transform: translateY(0);
      height: auto;
  }
}


</style>
