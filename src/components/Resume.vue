<template>
    <div class='resume'>
        <p class='resume-hello float1'>Hi, this is <span class='name'>MY RESUME</span></p>
        <a href='assets/joshua-bennett-resume.pdf' download>
            <button class="button download-button">
                <span class="icon">
                    <i class="fas fa-download"></i>
                </span>
                <span>Download as PDF</span>
            </button>
        </a>
        <div class="resume-section">
            <div class="sections-container resume-hello">
                <div class="details has-text-centered">
                    <p class='detail-title'>Joshua Bennett</p>
                    <p><i class='fas fa-envelope'></i> joshuabennett@utexas.edu</p>
                    <i class='fab fa-github'></i><a href='https://github.com/joshuabennett'> github.com/joshuabennett</a>
                    <p><i class='fas fa-phone'></i> 856-906-0146</p>
                </div>
                <div class="intro has-text-centered">
                    I'm a self-taught Front-End Web Developer looking for an internship or full-time position. I've got a knack for problem-solving. I genuinely love to learn. I've got an artistic outlook and love to design and build things. I'm very passionate about what I do and I strive to be the best. I'm excited to start my career and work with other intelligent people to build amazing ideas.
                </div>
                <div class="columns">
                    <div class="column is-one-third section-title has-text-right">
                    EDUCATION
                    </div>
                    <div class="column is-two-thirds section-info">
                        <p>
                            <span style='font-weight: bold;'>University of Texas at Austin</span>, Austin, TX
                        </p>
                        <p>
                            Computer Science, 2010-2014
                        </p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-one-third section-title has-text-right">
                        SKILLS
                    </div>
                    <div class="column is-two-thirds section-info">
                        <p>
                            HTML, CSS, SASS, Bulma
                        </p>
                        <p>
                            JavaScript, Vue.js
                        </p>
                        <p>
                            Adobe Photoshop
                        </p>
                        <p>
                            Visual Studio Code, Git, Slack, Webpack, NPM
                        </p>
                        <p>
                            Linux, Windows
                        </p>
                        <p> Firebase, Google Domains</p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-one-third section-title has-text-right">
                        PROJECTS
                    </div>
                    <div class="column is-two-thirds section-info">
                        <p><span style='font-weight: bold;'>Portfolio</span> - joshuabennett.dev</p>
                        <p>You are here. I built this website using Vue.js and Bulma. I used it to showcase my aesthetic with a simple and responsive UI/UX Design and mastery of CSS/HTML.</p>
                        <p class='techs'>Vue.js, Bulma, CSS, HTML, Vue-Router</p>
                        <br>
                        <p><span style='font-weight: bold;'>Tournament Brackets Manager</span> - <a href='brackets.joshuabennett.dev'>brackets.joshuabennett.dev</a></p>
                        <p> Built using Vue.js and Bulma to make tournament brackets for 4 to 16 players in various formats. Primarly built to showcase my mastery of Vue.js and it's component communication. </p>
                        <p class='techs'>Vue.js, Bulma, CSS, HTML</p>
                        <br>
                        <p><span style='font-weight: bold;'>Terraforming Mars Board Game Scoresheet</span> - <a href='mars.joshuabennett.dev'>mars.joshuabennett.dev</a></p>
                        <p>  Created a mobile-friendly SPA to easily score results for a popular board game, Terraforming Mars. Ranks each players final scores and gives individual rankings for each scoring category.</p>
                        <p class='techs'>Vue.js, Bulma, CSS/SASS, HTML, Vee-validate</p>
                        <br>
                        <p><span style='font-weight: bold;'>Anime Recommendations</span> - <a href='anime.joshuabennett.dev'>anime.joshuabennett.dev</a></p>
                        <p> Developed a SPA using Jikan RESTful API that takes a user's MyAnimeList.net username and extracts their favorite anime. It uses this information to generate recommendations by scoring each of their watched Anime's individual recommendations, weighting them and adding those scores together and finally returning the 5 best recommendations for that user.</p>
                        <p class='techs'>Vanilla Javascript, Bulma, Jikan API, CSS, HTML</p>
                        <br>
                        <p><span style='font-weight: bold;'>Reddit Search</span> - <a href='anime.joshuabennett.dev'>reddit.joshuabennett.dev</a></p>
                        <p>  Presents Reddit's top comments on a custom search while discarding extraneous comments allowing the user to find other reddit users' opinion on any subject quickly. Utilizes Google's Custom Search API to get better results then Reddit's search, then uses the snoowrap library as a wrapper for Reddit's API to extract the information which is then displayed using Bulma and Vue.js.</p>
                        <p class='techs'>Vue.js, Bulma, Google Custom Search API, snoowrap</p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-one-third section-title has-text-right">
                    EXPERIENCE
                    </div>
                    <div class="column is-two-thirds section-info">
                        <p>
                            <span style='font-weight: bold;'>WALGREENS</span>, Austin, TX
                        </p>
                        <p>
                            Feb 2018 - Present
                        </p>
                        <p>Pharmacy Technician</p>
                        <br>
                        <p>--> Green Card Certified by Pharmacy Technician Certification Board</p>
                        <p>--> Utilize Intercom Plus systems to assist customers with various tasks such as selling prescriptions, updating information, and refilling medications.</p>
                        <p>--> Fill over 300 prescriptions daily by using drug knowledge to count and prepare medications.</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
body, html, #app {
    overflow: auto;
}
.resume {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 25px 50px 25px 50px;
    position: relative;

}
.resume-section {
    width: 55vw;
}
.sections-container {
    display: flex;
    flex-direction: column;
}
.resume-hello {
    background: rgba(0,0,0,0.5);
    padding: 10px 10px 10px 10px;
    border-radius: 15px;
    margin: 5px;
    color: white;

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
.section-title {
    font-weight: bold;
    color: rgb(0, 195, 255);
    font-size: 18px;
}
.columns {
    padding: .7vw;
}
.intro {
    padding: 1vw;
    font-size: calc(10px + 0.5vw);
}
.detail-title {
    font-size: calc(14px + 1.5vw);
    text-transform: uppercase;
    font-family: 'Lexend Deca', sans-serif;
}
.techs {
    font-style: italic;
    font-size: 14px;
    color: rgb(0, 195, 255);
}
.section-info a:hover {
    color: lightblue;
}
@media only screen and (max-width: 780px) {
    .resume-section {
        width: 85vw;
    }
}
.download-button {
    margin: 1em;
    background: transparent;
    color: white;
}
.download-button:hover {
    color: plum;
    border: 1px solid plum;
}
.download-button:focus {
    color: lightgray;
    border: 1px solid lightgray;
}

</style>