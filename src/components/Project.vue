<template>
  <li :id="`project-${project.subname}`" class="project" aria-expanded="false" aria-hidden="false">
    <div class="before-expand">
      <img
        ref="video"
        class="thumb"
        @mouseleave="stopVideo"
        @click="stopVideo"
        :src="'assets/' + project.subname + '-screenshot.png'"
      />
      <div ref="overlay" class="play-overlay" @click="playVideo" @mouseover="playVideo"></div>
      <div ref="play" class="play-button" @click="playVideo"></div>
    </div>
    <transition name="fade-text">
      <div class="after-expand">
        <h3 class="project-title">{{project.name}}</h3>
        <ul>
          <li class="tag is-white" v-for="tool in project.tools" :key="tool">{{ tool }}</li>
        </ul>
        <p class="proj-info">{{ project.info }}</p>
        <ul class="buttons-group">
          <a
            class="button github-button"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
            <span>GitHub</span>
          </a>
          <button class="button project-button">
            <a
              :href="`https://${project.link}`"
              target="_blank"
              rel="noopener noreferrer"
            >CHECK IT OUT</a>
          </button>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    playVideo() {
      this.$refs.video.src = "assets/" + this.project.subname + "-video.gif";
      this.$refs.play.style.display = "none";
      this.$refs.overlay.style.display = "none";
    },
    stopVideo() {
      this.$refs.video.src =
        "assets/" + this.project.subname + "-screenshot.png";
      this.$refs.play.style.display = "";
      this.$refs.overlay.style.display = "";
    },
  },
};
</script>

<style lang='scss'>
.project {
  .before-expand {
    position: relative;
  }
  .play-overlay {
    position: absolute;
    border-radius: 10px;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(59, 2, 97, 0.7);
  }
  .play-button {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100px;
    height: 100px;
    border-style: solid;
    box-sizing: border-box;
    border-width: 50px 0 50px 100px;
    border-color: transparent transparent transparent rgb(248, 248, 248);
  }
  .thumb {
    border-radius: 10px;
    border: 10px solid rgba(128, 0, 128, 0.274);
  }
  .button {
    margin: 5px 5px 0 0;
  }
  .buttons-group .project-button {
    background: transparent;
    border-radius: 0;
    a {
      color: white;
    }
  }

  .github-button {
    &:visited {
      color: gray;
    }
    &:hover {
      color: black;
    }
  }
  @media only screen and (max-width: 800px) {
    .tag {
      font-size: 2vw;
    }
  }
}
</style>
