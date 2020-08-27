<template>
  <section class="projects">
    <header class="introduction float1">
      Hi, these are
      <span class="name">MY PROJECTS</span>
    </header>
    <ul class="projects-contain">
      <transition-group class="projects-container" name="fade" :duration="1000">
        <app-project
          v-for="project in projects"
          class="project"
          :project="project"
          :class="project.subname"
          :key="project.subname"
        ></app-project>
      </transition-group>
    </ul>
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
            "A React Web App that allows you to import decks youve built using Wizards of the Coasts MTG Arena application in a Limited Draft Environment. It then stores the decks in your profile and analyzes the data for local and global statistics.",
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
          name: "Anime Suggest",
          subname: "anime",
          link: "anime.joshuabennett.dev",
          github: "https://github.com/joshuabennett/anime-recommendations",
          info:
            "Takes the users myanimelist.net username and evaluates their top watched anime. Then recommends 5 animes based on a custom algorithm that analyzes recommendations given by users on the website and weights them accordingly using the Jikan Animelist API.",
          tools: ["vanilla js", "bulma", "Jikan API"],
        },
        {
          name: "Reddit Search",
          subname: "reddit",
          link: "reddit.joshuabennett.dev",
          github: "https://github.com/joshuabennett/reddit-search",
          info:
            "Quickly search reddit for the top comments on any subject. Utilizes google to return results that are more relevant that wading through all the useless bulk reddit's own search feature gives.",
          tools: ["vue.js", "bulma", "Google Custom Search API", "snoowrap"],
        },
        {
          name: "Brackets",
          subname: "brackets",
          link: "brackets.joshuabennett.dev",
          github: "https://github.com/joshuabennett/bracket-generator",
          info:
            "Create tournament brackets for Smash Bros. Ultimate or any other competition. Create either a single, double, or round robin tournament for up to 16 players, and then use the app to record wins and losses to progress the bracket.",
          tools: ["vue.js", "bulma"],
        },
        {
          name: "Mars Scoresheet",
          subname: "mars",
          link: "mars.joshuabennett.dev",
          github: "https://github.com/joshuabennett/mars-scoresheet",
          info:
            "An app that tallys and adds the scores for a board game called Terraforming Mars. Validates all inputs before showing the results of the game and providing insight into each players best and worse category scores.",
          tools: ["vue.js", "bulma", "vee-validate"],
        },
      ],
    };
  },
};
</script>

<style lang='scss'>
::-webkit-scrollbar {
  width: 10px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: white;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
}
p {
  color: white;
  font-family: "Gudea", sans-serif;
}
.tag {
  margin: 5px;
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
  align-items: center;
  text-align: left;
  padding: 25px 50px;
  height: 100%;
}
.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.projects-contain {
  margin-top: 0.5em;
  height: 70%;
  overflow-y: scroll;
}
.project {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80vw;
  margin: 0.5em 1em 1.5em 1em;
  padding: 20px;
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
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.after-expand {
  margin: 1em;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 45%;
  padding: 1em 0.5em 1em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  ::-webkit-scrollbar {
    width: 0;
  }
  .projects-contain {
    width: 100%;
  }
  .project {
    width: 90%;
    margin: 10px 5px 10px 5px;
    padding: 10px;
    flex-direction: column;
  }
  .projects {
    padding: 15px 0 0 0;
  }
  .project-title {
    font-size: 4.5vw;
  }
  .after-expand {
    margin: 0.25em;
    width: 100%;
    padding: 1em 1em 0px 1em;
    justify-content: space-between;
  }
  .before-expand {
    width: 100%;
    margin: 0.5em;
  }
  body,
  html,
  #app {
    overflow-y: scroll;
  }
  .buttons-group .button a {
    font-size: 14px;
  }
  .buttons-group,
  .buttons-group .button {
    width: 100%;
    margin: 5px 0 1em 0;
  }
}
</style>