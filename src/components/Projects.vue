<template>
  <section class="projects">
    <p class="introduction float1">
      Hi, these are
      <span class="name">MY PROJECTS</span>
    </p>
    <div class="projects-contain">
      <transition-group class="projects-container" name="fade" :duration="1000">
        <app-project
          v-for="project in projects"
          class="project"
          v-show="!isExpanded || curProject == project.subname"
          :project="project"
          :class="project.subname"
          :key="project.subname"
          v-on:update-project="curProject = $event"
          v-on:update-expanded="isExpanded = !isExpanded"
        ></app-project>
      </transition-group>
    </div>
  </section>
</template>

<script>
import Project from "../components/Project.vue";

export default {
  components: {
    "app-project": Project,
  },
  data: function () {
    return {
      isExpanded: false,
      curProject: "",
      projects: [
        {
          name: "MTGArena Stats",
          subname: "arena",
          link:
            "arena-stats.firebaseapp.com/login?email=test@test.com&password=test123",
          github: "https://github.com/joshuabennett/mtg-arena-stats",
          info:
            "A React Web App that allows you to import decks youve built using Wizards of the Coasts MTG Arena application in Limited Draft Environment. It then stores the decks in your profile and analyzes the data for statistics and sharing.",
          tools: [
            "React",
            "SASS",
            "Scryfall API",
            "React Dom Router",
            "Axios",
            "FontAwesome",
            "Firebase",
            "Firestore",
          ],
        },
        {
          name: "Reddit Search",
          subname: "reddit",
          link: "reddit.joshuabennett.dev",
          github: "https://github.com/joshuabennett/reddit-search",
          info:
            "Search reddit for the top comments on any subject without all the useless bulk.",
          tools: ["vue.js", "bulma", "Google Custom Search API", "snoowrap"],
        },
        {
          name: "Brackets",
          subname: "brackets",
          link: "brackets.joshuabennett.dev",
          github: "https://github.com/joshuabennett/bracket-generator",
          info:
            "Built to create tournament brackets for Smash Bros. Ultimate. Create either a single, double, or round robin tournament for up to 16 players.",
          tools: ["vue.js", "bulma"],
        },
        {
          name: "Anime Suggest",
          subname: "anime",
          link: "anime.joshuabennett.dev",
          github: "https://github.com/joshuabennett/anime-recommendations",
          info:
            "Takes the users myanimelist.net username and evaluates their top watched anime. Then recommends 5 animes based on a score given to recommended Animes for each Anime in their list using the Jikan Animelist API.",
          tools: ["vanilla js", "bulma", "Jikan API"],
        },
        {
          name: "Mars Scoresheet",
          subname: "mars",
          link: "mars.joshuabennett.dev",
          github: "https://github.com/joshuabennett/mars-scoresheet",
          info:
            "An app that tallys and adds the scores for a board game called Terraforming Mars. Shows results of the game and provides insight into each players best category scores.",
          tools: ["vue.js", "bulma", "vee-validate"],
        },
      ],
    };
  },
};
</script>

<style lang='scss'>
p {
  color: white;
  font-family: "Gudea", sans-serif;
}
.tag {
  margin: 5px;
}
.github-button {
  margin-top: 5px;
  &:visited {
    color: gray;
  }
  &:hover {
    color: black;
  }
}

.buttons-group .button {
  background: transparent;
  border-radius: 0;
  a {
    color: white;
    font-size: 0.8vw;
  }
}
.tools {
  margin-right: 3px;
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
.introduction {
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 10px 10px 10px;
  border-radius: 15px;
  margin: 5px;
}
.project-title {
  text-transform: uppercase;
  color: white;
  line-height: 1em;
  font-family: "Gudea", sans-serif;
  font-size: calc(10px + 0.8vw);
  letter-spacing: 5px;
  font-weight: bold;
}
.projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 25px 50px 25px 50px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.projects-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}
.projects-contain {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}
.project {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  width: 20vw;
  height: 15vw;
  margin: 50px 20px 0px 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  animation: float 5s ease-in-out infinite;
  transition: all 1s;
  &:hover {
    animation-play-state: paused;
  }
}
.proj-info {
  font-size: calc(10px + 0.4vw);
}
.before-expand {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.after-expand {
  width: 70%;
  padding: 3em 2em 3em 3em;
}
.thumb {
  height: 50%;
}
.more-info:hover {
  background-color: rgb(33, 75, 129);
  box-shadow: 0 0 0 0.125em purple;
  /* animation: pulse 3s ease-in-out infinite; */
}
.float1 {
  animation: float 5s ease-in-out infinite;
}
.overlay {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  height: 30%;
  background: black;
  opacity: 0.75;
  width: 100%;
}
.overlay a,
a img {
  height: 100%;
}
.overlay a {
  padding: 10px;
  color: white;
}
a img {
  fill: white;
  opacity: 1;
}
.expanded {
  width: 90vw;
  transition: width 2s;
}
// .shrinked {
//   margin: 0px;
//   padding: 0px;
//   width: 0px;
//   height: 0px;
//   opacity: 0;
//   transition: all 0.5s;
// }
.fade-enter-active {
  position: absolute;
  transition: opacity 1.5s;
  transition-delay: 1s;
}
.fade-leave-active {
  position: absolute;
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-text-enter-active {
  transition: opacity 1.5s;
  transition-delay: 1s;
}
.fade-text-leave-active {
  position: absolute;
  transition-delay: 0.5s;
  transition: opacity 0.5s;
}
.fade-text-enter, .fade-text-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
    background-color: turquoise;
  }
  100% {
    background-color: rgb(55, 133, 235);
    opacity: 1;
  }
}
@media only screen and (max-width: 1336px) {
  .projects-container {
    width: 90vw;
  }
  .project {
    margin: 5px;
    height: auto;
    min-width: calc(300px + 10vw);
    padding: 10px;
  }
  .shrinked {
    margin: 0;
    height: 0;
    padding: 0;
    width: 0;
  }
  .after-expand {
    padding: 0px 0px 0px 10px;
    justify-content: space-between;
  }
  body,
  html,
  #app {
    overflow: auto;
  }
  .projects {
    transform: translateY(0);
    top: 0;
  }
  .buttons-group .button a {
    font-size: 14px;
  }
  .buttons-group,
  .buttons-group .button {
    width: 100%;
    margin: 2px;
  }
}
</style>