<template>
    <div class='about'>
        <p class='hello float1'>Hi, these are <span class='name'>MY PROJECTS</span></p>
        <div class="projects-container">
            <transition-group class='projects-container' name='fade'>
                <app-project
                    v-for='project in projects' 
                    
                    :project='project' 
                    :class='project.subname' 
                    :key='project.subname'
                    @expanded='expand($event)'>
                </app-project>
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
            projects: [
                {
                    name: 'Brackets',
                    subname: 'brackets',
                    link: 'brackets.joshuabennett.dev',
                    github: '',
                    tools: ['vue.js', 'bulma']
                },
                {
                    name: 'Anime Suggest',
                    subname: 'anime',
                    link: 'anime.joshuabennett.dev',
                    github: '',
                    tools: ['vanilla js', 'bulma']
                },
                {
                    name: 'Mars Scoresheet',
                    subname: 'mars',
                    link: 'mars.joshuabennett.dev',
                    github: '',
                    tools: ['vue.js', 'bulma']
                },
                {
                    name: 'Drug Info',
                    subname: 'drugs',
                    link: 'drugs.joshuabennett.dev',
                    github: '',
                    tools: ['vue.js', 'bulma']
                }
            ]
        }
    },
    methods: {
        expand(project) {
            this.isExpanded = !this.isExpanded;
            this.curProject = project.subname;
            console.log(project.subname);
            var projContainer = document.querySelector('.'+this.curProject);
            if(projContainer.classList.contains('expanded')) {
                projContainer.classList.remove('expanded');
            } else {
                projContainer.classList.add('expanded');
            }

        }
    },
    components: {
        'app-project': Project
    }
}
</script>

<style>
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
    flex-direction: column;
    justify-content: space-between;
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
}
.thumb {
    height: 50%;
}

.project:hover {
    animation-play-state: paused;
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
.fade-enter-active, .fade-leave-active {
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
</style>