<template>
    <div class='about'>
        <p class='hello float1'>Hi, these are <span class='name'>MY PROJECTS</span></p>
        <div class="projects-container">
            <transition-group class='projects-container' name='fade'>
                <div
                    v-for='project in projects'
                    class='project'               
                    :class='project.subname' 
                    :key='project.subname'
                >
                    <div class="before-expand">
                        <div class="project-title">{{project.name}}</div>
                        <img class='thumb' :src="'../src/assets/' + project.subname + '-icon.svg'">
                        <div class="buttons-group">
                            <transition name='fade'>
                                <button class="button more-info" @click='expand(project)' v-show='!isExpanded || curProject == project.subname'><a> {{ title }} </a></button>
                            </transition>
                            <button class="button"><a :href='"https://" + project.link'>CHECK IT OUT</a></button>
                        </div>
                    </div>
                    <transition name='fade'>
                    <div class="after-expand" v-show='isExpanded && curProject == project.subname'>
                        <span class="tag is-white" v-for='tool in project.tools'> {{ tool }}</span>
                        <p> {{ project.info }} </p>

                    </div>
                    </transition>
                </div>

            </transition-group>
        </div>
    </div>
</template>

<script>
import Project from './Project.vue';

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
                    github: '',
                    info: 'Built to create tournament brackets for Smash Bros. Ultimate. Create either a single, double, or round robin tournament for up to 16 players.',
                    tools: ['vue.js', 'bulma']
                },
                {
                    name: 'Anime Suggest',
                    subname: 'anime',
                    link: 'anime.joshuabennett.dev',
                    github: '',
                    info: 'Takes the users myanimelist.net username and evaluates their top watched anime. Then recommends 5 animes based on a score given to recommended Animes for each Anime in their list using the Jikan Animelist API.',
                    tools: ['vanilla js', 'bulma', 'Jikan API']
                },
                {
                    name: 'Mars Scoresheet',
                    subname: 'mars',
                    link: 'mars.joshuabennett.dev',
                    github: '',
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
                }
            ]
        }
    },
    methods: {
        expand(project) {
            this.curProject = project.subname;
            var projContainer = document.querySelector('.'+this.curProject);
            if (!this.isExpanded) {
                projContainer.style.justifyContent = 'flex-start';
                window.setTimeout(() => {
                this.isExpanded = !this.isExpanded;
                projContainer.style.justifyContent = 'space-around';
            }, 600);
            } else {
                this.isExpanded = !this.isExpanded;
            }
            console.log(project.subname);
        
            if(projContainer.classList.contains('expanded')) {
                projContainer.classList.remove('expanded');
            } else {
                projContainer.classList.add('expanded');
            }
            

            this.title == 'MORE INFO' ? this.title = 'LESS INFO' : this.title = 'MORE INFO';

        }
    },
    components: {
        'app-project': Project
    }
}
</script>

<style>
.tag {
    margin: 5px;
}
.button {
    background: transparent;
    border-radius: 0;
}
.button a {
    color: white;
}
.tools {
    margin-right: 3px;
}
.name {
    text-transform: uppercase;
    margin: 10px;
    color: white;
    font-family: 'Gudea', sans-serif;
    font-size: 2em;
    letter-spacing: 5px;
    font-weight: bold;
}
.project-title {
    text-transform: uppercase;
    color: white;
    font-family: 'Gudea', sans-serif;
    font-size: 1.5em;
    letter-spacing: 5px;
    font-weight: bold;
}
.about {
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
p {
    color: white;
    font-family: 'Gudea', sans-serif;
}
.hello {
    background: rgba(0,0,0,0.5);
    padding: 10px 10px 10px 10px;
    border-radius: 15px;
    margin: 5px;
}
.projects-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
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
    transition: width 1s;
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

.project:hover {
    animation-play-state: paused;
}
.more-ifo:hover {
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
    width: 100vw;
    transition: width 2s;
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
</style>