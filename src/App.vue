<template>
  <div id="app">
    <div class="stars"></div>
    <app-header class="push"></app-header>
    <transition name="bigfade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Resume from "./components/Resume.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-about": About,
    "app-resume": Resume,
    "app-projects": Projects,
  },
  created() {
    function setDocHeight() {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight / 100}px`
      );
    }

    window.addEventListener("resize", function () {
      setDocHeight();
    });
    window.addEventListener("orientationchange", function () {
      setDocHeight();
    });

    setDocHeight();
  },
};
</script>

<style lang="scss">
body,
html,
#app {
  margin: 0;
  padding: 0;
  height: calc(var(--vh, 1vh) * 100);
}
.push {
  margin-top: 1vw;
  height: 40px;
}
html {
  background: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}
.stuff {
  background: rgba(0, 0, 0, 0.3);
  padding-bottom: 5%;
  width: auto;
  max-width: 50vw;
  border-radius: 50px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

* {
  margin: 0;
  padding: 0;
}
h2 {
  margin-top: 30px;
  text-align: center;
}
header h2 {
  font-size: 22px;
  margin: 0 auto;
  padding: 10px 0;
  width: 80%;
  text-align: center;
}
header a,
a:visited {
  text-decoration: none;
  color: #fcfcfc;
}

.stars,
.twinkling,
.clouds {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.stars {
  background: url(http://www.script-tutorials.com/demos/360/images/stars.png)
    repeat top center;
  z-index: 0;
}
.bigfade-enter-active,
.bigfade-leave-active {
  transition: opacity 0.5s;
}
.bigfade-enter, .bigfade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 1336px) {
  .info {
    transform: translateY(0);
    height: auto;
  }
}
@media only screen and (max-height: 650px) {
  .about {
    padding-top: 75px;
  }
}
</style>
