<template>
  <div class="resume">
    <p class="resume-hello float1">
      Hi, this is
      <span class="name">MY RESUME</span>
    </p>
    <a href="assets/joshua-bennett-resume.pdf" download>
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
          <p class="detail-title">Joshua Bennett</p>
          <p>
            <i class="fas fa-envelope"></i> joshuabennett@utexas.edu
          </p>
          <i class="fab fa-github"></i>
          <a href="https://github.com/joshuabennett">github.com/joshuabennett</a>
          <p>
            <i class="fas fa-phone"></i> 856-906-0146
          </p>
        </div>
        <div
          class="intro has-text-centered"
        >I'm a self-taught Front-End Web Developer looking for an internship or full-time position. I've got a knack for problem-solving. I genuinely love to learn. I've got an artistic outlook and love to design and build things. I'm very passionate about what I do and I strive to be the best. I'm excited to start my career and work with other intelligent people to build amazing ideas.</div>
        <div class="columns">
          <div class="column is-one-third section-title has-text-right">EDUCATION</div>
          <div class="column is-two-thirds section-info">
            <p>
              <span style="font-weight: bold;">University of Texas at Austin</span>, Austin, TX
            </p>
            <p>Computer Science, 2010-2014</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-one-third section-title has-text-right">SKILLS</div>
          <div class="column is-two-thirds section-info">
            <p>HTML, CSS, SASS, Bulma</p>
            <p>JavaScript, React, Vue</p>
            <p>Adobe Photoshop</p>
            <p>Visual Studio Code, Git, Slack, Webpack, NPM</p>
            <p>Linux, Windows</p>
            <p>Firebase, Google Domains</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-one-third section-title has-text-right">PROJECTS</div>
          <div class="column is-two-thirds section-info">
            <p>
              <span style="font-weight: bold;">MTGArena Stats</span> -
              <a
                href="https://arena-stats.firebaseapp.com/login?email=test@test.com&amp;password=test123"
              >arena.joshuabennett.dev</a>
            </p>
            <p>A full-fledged profile and statistic web application built in React that imports data from a User's decks in the MTG Arena program and creates a profile and statistics from them. Leveraged the Scryfall API using the Axios library to acquire data from imported cards. Performed complex queries with Firebase's Firestore NOSQL database. Stylized with SASS and FontAwesome Libraries.</p>
            <p
              class="techs"
            >React, SASS, HTML, React Dom Router, Scryfall API, Axios, FontAwesome, Firestore</p>
            <br />
            <p>
              <span style="font-weight: bold;">Tournament Brackets Manager</span> -
              <a href="https://brackets.joshuabennett.dev">brackets.joshuabennett.dev</a>
            </p>
            <p>Built using Vue.js and Bulma to make tournament brackets for 4 to 16 players in various formats. Primarly built to showcase my mastery of Vue.js and it's component communication.</p>
            <p class="techs">Vue.js, Bulma, CSS, HTML</p>
            <br />
            <p>
              <span style="font-weight: bold;">Terraforming Mars Board Game Scoresheet</span> -
              <a href="https://mars.joshuabennett.dev">mars.joshuabennett.dev</a>
            </p>
            <p>Created a mobile-friendly web application that evaluates the scores of players in the popular board game ‘Terraforming Mars’. Incorporated the vee-validate library to validate all user inputs. Exploited SASS to quickly establish a corresponding theme with Bulma.</p>
            <p class="techs">Vue.js, Bulma, CSS/SASS, HTML, Vee-validate</p>
            <br />
            <p>
              <span style="font-weight: bold;">Anime Recommendations</span> -
              <a href="https://anime.joshuabennett.dev">anime.joshuabennett.dev</a>
            </p>
            <p>Developed an algorithm using the Jikan API to evaluate a MyAnimeList.net user’s collection of watched anime and generate the 5 best recommendations for anime they should watch.</p>
            <p class="techs">Vanilla Javascript, Bulma, Jikan API, CSS, HTML</p>
            <br />
            <p>
              <span style="font-weight: bold;">Reddit Search</span> -
              <a href="https://reddit.joshuabennett.dev">reddit.joshuabennett.dev</a>
            </p>
            <p>Leveraged two APIs to perform a custom search on Reddit, but using Google’s superior search algorithms. Discarded extraneous information and pleasantly displayed results using Vue.js and Bulma.</p>
            <p class="techs">Vue.js, Bulma, Google Custom Search API, snoowrap</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-one-third section-title has-text-right">EXPERIENCE</div>
          <div class="column is-two-thirds section-info">
            <p>
              <span style="font-weight: bold;">WALGREENS</span>, Austin, TX
            </p>
            <p>Feb 2018 - Present</p>
            <p>Pharmacy Technician</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.resume {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 25px 50px 25px 50px;
  width: 100vw;
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
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 10px 10px 10px;
  border-radius: 15px;
  margin: 5px;
  color: white;
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
.section-title {
  font-weight: bold;
  color: rgb(0, 195, 255);
  font-size: 18px;
}
.columns {
  padding: 0.7vw;
}
.intro {
  padding: 1vw;
  font-size: calc(10px + 0.5vw);
}
.detail-title {
  font-size: calc(14px + 1.5vw);
  text-transform: uppercase;
  font-family: "Lexend Deca", sans-serif;
}
.techs {
  font-style: italic;
  font-size: 14px;
  color: rgb(0, 195, 255);
}
.section-info a:hover {
  color: lightblue;
}
.download-button {
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
@media only screen and (max-width: 780px) {
  .resume-section {
    width: 85vw;
  }
}
</style>