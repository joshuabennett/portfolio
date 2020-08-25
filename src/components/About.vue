<template>
  <section class="about has-text-centered">
    <ul class="sky">
      <li class="p p-1"></li>
      <li class="p p-2"></li>
      <li class="p p-3"></li>
      <li class="p p-4"></li>
      <li class="p p-5"></li>
    </ul>
    <header class="hello float1">
      Hi, I'm
      <span class="name">JOSHUA BENNETT</span>
    </header>
    <p class="hello float2">
      I'm a self taught
      <bold>Front-End Web Developer{{" "}}</bold>located in
      <mark class="city">Austin, Texas</mark> looking for an opportunity for an internship or full-time position as a
      <bold>Junior Web Developer</bold>
    </p>
    <div class="circle-container">
      <button class="circle">
        <a href="https://github.com/joshuabennett" aria-label="My Github Profile">
          <img :src="'assets/icon-github.png'" />
        </a>
      </button>
      <button class="circle">
        <a
          href="https://www.linkedin.com/in/joshua-bennett-9b964257/"
          aria-label="My LinkedIn Profile"
        >
          <img :src="'assets/icon-linkedin.png'" />
        </a>
      </button>
      <button class="circle">
        <a href="mailto:joshuabennett@utexas.edu" aria-label="Send me an Email">
          <img :src="'assets/icon-google.png'" />
        </a>
      </button>
    </div>
    <div class="smaller-circle"></div>
    <ul class="logo-container">
      <li class="item" v-for="item in images" :key="item">
        <img class="logo" :src="'assets/'+item" />
        <caption>{{ filterName(item) }}</caption>
      </li>
    </ul>
    <a href="assets/joshua-bennett-resume.pdf" download>
      <button class="button download-button">
        <span class="icon">
          <i class="fas fa-download"></i>
        </span>
        <span>Download Resume</span>
      </button>
    </a>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      images: [
        "icon-css3.svg",
        "icon-git.svg",
        "icon-html5.svg",
        "icon-js.svg",
        "icon-photoshop.svg",
        "icon-sass.svg",
        "icon-vscode.svg",
        "icon-vue.svg",
        "icon-react.svg",
      ],
    };
  },
  mounted() {
    var comet1 = this.$el.querySelector(".p-1");
    var comet2 = this.$el.querySelector(".p-2");
    var comet3 = this.$el.querySelector(".p-3");
    var comet4 = this.$el.querySelector(".p-4");
    var comet5 = this.$el.querySelector(".p-5");

    function setProperty(startPos, comet) {
      comet.style.setProperty("--start-pos", Math.floor(startPos) + "%");
      var display = Math.random();
      display > 0.7
        ? comet.style.setProperty("--display", "normal")
        : comet.style.setProperty("--display", "none");
    }
    function changeAnimationTime(comet) {
      var animationDuration = Math.random();
      setProperty(animationDuration * 50, comet);
    }

    setInterval(() => {
      changeAnimationTime(comet1);
    }, 5000);
    setInterval(() => {
      changeAnimationTime(comet2);
    }, 6000);
    setInterval(() => {
      changeAnimationTime(comet3);
    }, 9000);
    setInterval(() => {
      changeAnimationTime(comet4);
    }, 3000);
    setInterval(() => {
      changeAnimationTime(comet5);
    }, 2000);
  },
  methods: {
    filterName(item) {
      var str = item.substring(item.indexOf("-") + 1, item.indexOf("."));
      return str;
    },
  },
};
</script>

<style lang='scss'>
@keyframes particleAnimation {
  0% {
    opacity: 1;
    left: -200px;
  }
  100% {
    opacity: 0.1;
    left: calc(100%);
  }
}

li,
ul,
header {
  display: block;
}

mark {
  background-color: transparent;
}

.sky {
  position: absolute;
  transform: rotateZ(45deg);
  height: 60vh;
  width: 60vh;
  z-index: 3;
}
.p {
  position: fixed;
  left: 0px;
  top: 50px;
  width: 1px;
  height: 1px;
  background-color: white;
  position: fixed;
  animation-name: particleAnimation;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.p::before {
  position: absolute;
  display: block;
  content: "";
  width: 100px;
  right: 1px;
  top: 0px;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
}
.p-1 {
  top: var(--start-pos);
  animation-duration: 5s;
  display: var(--display);
}
.p-2 {
  top: var(--start-pos);
  animation-duration: 6s;
  display: var(--display);
}
.p-3 {
  top: var(--start-pos);
  animation-duration: 9s;
  display: var(--display);
}
.p-4 {
  top: var(--start-pos);
  animation-duration: 3s;
  display: var(--display);
}
.p-5 {
  top: var(--start-pos);
  animation-duration: 2s;
  display: var(--display);
}
.circle-container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 5;
}
.circle {
  padding: 5px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.5);
  margin: 1em;
}
bold {
  font-weight: bold;
}
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 25px 50px 25px 50px;
  height: 100%;
  overflow-x: hidden;
}
.name {
  text-transform: uppercase;
  margin: 10px;
  color: white;
  font-family: "Gudea", sans-serif;
  font-size: calc(16px + 0.75vw);
  letter-spacing: calc(1px + 0.2vw);
  font-weight: bold;
}
p,
header,
caption {
  color: white;
  font-family: "Gudea", sans-serif;
  font-size: calc(10px + 0.4vw);
}
.hello {
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 10px;
  border-radius: 15px;
  margin: 5px;
  transform: translatey(0px);
}
.float1 {
  animation: float 5s ease-in-out infinite;
}
.float2 {
  animation: float2 6s ease-in-out infinite;
}
.city {
  color: pink;
  font-weight: bold;
}
.logo-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.logo {
  width: 100%;
  height: 100%;
  margin: 10px;
  width: 50px;
  max-height: 55px;
  fill: white;
}
br {
  color: white;
}
.item caption {
  display: block;
  text-transform: uppercase;
  font-size: 12px;
}

.item {
  display: flex;
  flex-direction: column;
}

.download-button {
  z-index: 5;
  margin: 1em;
  background: transparent;
  color: white;
  &:hover {
    color: plum;
    border: 1px solid plum;
  }
  &:focus {
    color: lightgray;
    border: 1px solid lightgray;
  }
}
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-7px);
  }
  100% {
    transform: translatey(0px);
  }
}
@keyframes float2 {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(5px);
  }
  100% {
    transform: translatey(0px);
  }
}
.break {
  margin: 30px 100px 30px 100px;
}

@media only screen and (max-width: 1336px) {
  body,
  html,
  #app {
    overflow: auto;
  }
  .about {
    transform: translateY(0);
    top: 0;
  }
}
</style>