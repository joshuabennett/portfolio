<template>
    <div class='projects'>
        <p class='introduction float1'>Hi, these are <span class='name'>MY PROJECTS</span></p>
        <div class="projects-contain">
            <transition-group class='projects-container' name='fade'>
                <div
                    v-for='project in projects'
                    class='project'               
                    :class='project.subname' 
                    :key='project.subname'
                >
                    <div class="before-expand">
                        <div class="project-title">{{project.name}}</div>
                        <img class='thumb' :src="'assets/' + project.subname + '-icon.svg'">
                        <div class="buttons-group">
                            <transition name='fade'>
                                <button class="button more-info" @click='expand(project)' v-show='!isExpanded || curProject == project.subname'><a> {{ title }} </a></button>
                            </transition>
                            <button class="button"><a :href='"https://" + project.link'>CHECK IT OUT</a></button>
                        </div>
                    </div>
                    <transition name='fade-text'>
                    <div class="after-expand" v-show='isExpanded && curProject == project.subname'>
                        <span class="tag is-white" v-for='tool in project.tools'> {{ tool }}</span>
                        <p class='proj-info'> {{ project.info }} </p>
                            <a class="button github-button" :href='project.github'>
                                <span class="icon">
                                <i class="fab fa-github"></i>
                                </span>
                                <span>GitHub</span>
                            </a>

                    </div>
                    </transition>
                </div>

            </transition-group>
        </div>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            isExpanded: false,
            curProject: '',
            title: 'MORE INFO',
            projects: [
                {
                    name: 'Brackets',
                    subname: 'brackets',
                    link: 'brackets.joshuabennett.dev',
                    github: 'https://github.com/joshuabennett/bracket-generator',
                    info: 'Built to create tournament brackets for Smash Bros. Ultimate. Create either a single, double, or round robin tournament for up to 16 players.',
                    tools: ['vue.js', 'bulma']
                },
                {
                    name: 'Anime Suggest',
                    subname: 'anime',
                    link: 'anime.joshuabennett.dev',
                    github: 'https://github.com/joshuabennett/anime-recommendations',
                    info: 'Takes the users myanimelist.net username and evaluates their top watched anime. Then recommends 5 animes based on a score given to recommended Animes for each Anime in their list using the Jikan Animelist API.',
                    tools: ['vanilla js', 'bulma', 'Jikan API']
                },
                {
                    name: 'Mars Scoresheet',
                    subname: 'mars',
                    link: 'mars.joshuabennett.dev',
                    github: 'https://github.com/joshuabennett/mars-scoresheet',
                    info: 'An app that tallys and adds the scores for a board game called Terraforming Mars. Shows results of the game and provides insight into each players best category scores.',
                    tools: ['vue.js', 'bulma', 'vee-validate']
                },
                {
                    name: 'Drug Info',
                    subname: 'drugs',
                    link: 'drugs.joshuabennett.dev',
                    github: '',
                    info: 'A useful app for studying the generic and brand names of Pharmaceutical drugs in preparation for the PTCE (Pharmacy Technician Certification Exam). Also provides information on controlled schedules for drugs and basic mechanisms or classifications. All information provided from FDA Drug API.',
                    tools: ['vue.js', 'bulma', 'FDA API']
                },
                {
                    name: 'Reddit Search',
                    subname: 'reddit',
                    link: 'reddit.joshuabennett.dev',
                    github: 'https://github.com/joshuabennett/reddit-search',
                    info: 'Search reddit for the top comments on any subject without all the useless bulk.',
                    tools: ['vue.js', 'bulma', 'Google Custom Search API', 'snoowrap']
                }
            ]
        }
    },
    methods: {
        expand(project) {
            this.curProject = project.subname;
            console.log(this.curProject);
            var projects = document.querySelectorAll('.project');
            console.log(projects);
            if (this.isExpanded) {
                this.isExpanded = false;
                for (let i = 0; i < projects.length; i++) {
                    if (!projects[i].classList.contains(this.curProject)) {
                        projects[i].classList.remove('shrinked');
                    } else {
                        projects[i].style.justifyContent = 'center';
                        projects[i].classList.remove('expanded');
                    }
                }
            } else {
                this.isExpanded = true;
                for (let i = 0; i < projects.length; i++) {
                    if (!projects[i].classList.contains(this.curProject)) {
                        projects[i].classList.add('shrinked');
                    } else {
                        projects[i].classList.add('expanded');
                        projects[i].style.justifyContent = 'flex-start';
                    }
                }
            }
            

            this.title == 'MORE INFO' ? this.title = 'LESS INFO' : this.title = 'MORE INFO';

        }
    }
}
</script>

<style lang='scss'>
p {
    color: white;
    font-family: 'Gudea', sans-serif;
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
    font-family: 'Gudea', sans-serif;
    font-size: calc(16px + 0.75vw);
    letter-spacing: calc(1px + .2vw);
    font-weight: bold;
}
.introduction {
    background: rgba(0,0,0,0.5);
    padding: 10px 10px 10px 10px;
    border-radius: 15px;
    margin: 5px;
}
.project-title {
    text-transform: uppercase;
    color: white;
    line-height: 1em;
    font-family: 'Gudea', sans-serif;
    font-size: calc(10px + .8vw);
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
    background: rgba(0,0,0,0.5);
    animation: float 5s ease-in-out infinite;
    transition: all 1s;
    &:hover {
        animation-play-state: paused;
    }
}
.proj-info {
    font-size: calc(10px + .4vw)
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
    opacity: .75;
    width: 100%;
}
.overlay a, a img {
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
.shrinked {
    margin: 0px;
    padding: 0px;
    width: 0px;
    height: 0px;
    opacity: 0;
    transition: all 0.5s;
}
.fade-enter-active {
    transition: opacity 1.5s;
    transition-delay: .5s;
}
.fade-leave-active {
  transition-delay: 1s;
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-text-enter-active {
    transition: opacity 1.5s;
    transition-delay: 1s;
}
.fade-text-leave-active {
  transition-delay: 0.5s;
  transition: opacity .5s;
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
      min-width: calc(250px + 10vw);
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
  body, html, #app {
      overflow: auto;
  }
  .projects {
      transform: translateY(0);
      top: 0;
  }
 .buttons-group .button a {
    font-size: 14px;
  }
  .buttons-group, .buttons-group .button {
      width: 100%;
      margin: 2px;
  }
}
</style>